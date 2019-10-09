
import { fromCallback } from 'promise-cb';
import { IotData } from 'aws-sdk';

import { ICallback, IEventPayload, HTTPStatusCodes } from '../lambdaTypes';

import { objectOnlyContainsKeys, isObjectEmpty } from '../utilities';
import { getTotalPledges, incPledgeCategory } from '../dynamoDBUtilities';

const iotdata = new IotData({ endpoint: process.env.awsIOTEndPoint });
const iotdataPublishPromise = (params): Promise<any> =>
  fromCallback(cb => iotdata.publish(params, cb));

export const pledgePost = async (event: IEventPayload, context, callback: ICallback) => {
  const directions = ["Right", "Left"];
  const categories = ['Clothing', 'Travels', 'Food', 'Purchases', 'Living'];

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    console.log(e);

    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: "JSON is not valid.",
    });
    return;
  }

  if (isObjectEmpty(body) ||
    objectOnlyContainsKeys(
      body,
      ["category", "computerLocation"]
    ) === false
  ) {
    const dataFormat = {
      category: "MajorPledgeCategory",
      computerLocation: "computerLocation",
    };

    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: "Please send data in the format: " + JSON.stringify(dataFormat),
    });
    return;
  } else if (
    !categories.includes(body.category) ||
    !directions.includes(body.computerLocation)
    ) {
    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: "Please make sure the computerLocation and/or category is correct.",
    });
    return;
  }

  const tableName = process.env.tableName;
  const pledges = await getTotalPledges(tableName);

  if (pledges == null) {
    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      body: "Server Error. Check server error logs.",
    });
  }

  const category = body.category;
  const updateError = await incPledgeCategory(tableName, pledges, category);

  if (updateError) {
    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: "Server Error. Check server error logs.",
    });
    return;
  }

  try {
    var params = {
      topic: process.env.awsIOTTopic,
      payload: event.body,
    };

    await iotdataPublishPromise(params);

    callback(null, {
      statusCode: HTTPStatusCodes.OK,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    });
  } catch (e) {
    console.log(e);

    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      body: "Server Error. Check server error logs.",
    });
  }
}
