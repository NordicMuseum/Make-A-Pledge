
import { fromCallback } from 'promise-cb';
import { DynamoDB } from 'aws-sdk';

import { isObjectEmpty, objectWithoutKeys } from './utilities';

const dynamo = new DynamoDB.DocumentClient();

export const dynamoDBGetPromise = (params): Promise<any> =>
  fromCallback(cb => dynamo.get(params, cb));
export const dynamoDBPutPromise = (params): Promise<any> =>
  fromCallback(cb => dynamo.put(params, cb));
export const dynamoDBScanPromise = (params): Promise<any> =>
  fromCallback(cb => dynamo.scan(params, cb));

export interface TotalPledges {
  type: 'TOTAL',
  Clothing: number,
  Travels: number,
  Food: number,
  Purchases: number,
  Living: number,
}

export const getTotalPledges = async (tablename: string): Promise<TotalPledges | null> => {
  try {
    const item = {
      type: 'TOTAL',
    }

    const getParams = {
      TableName: tablename,
      Key: item,
    };

    const getResults: any = await dynamoDBGetPromise(getParams);

    let pledges;
    if (isObjectEmpty(getResults)) {
      pledges = {
        type: 'TOTAL',
        Clothing: 0,
        Travels: 0,
        Food: 0,
        Purchases: 0,
        Living: 0,
      }
    } else {
      pledges = getResults.Item;
    }

    return pledges
  } catch (e) {
    console.log(e);
    return null;
  }
}

export const incPledgeCategory = async (tablename: string, pledges: TotalPledges, category: string): Promise<boolean> => {
  try {
    const newPledges = Object.assign({}, pledges,
      {
        [category]: pledges[category] += 1,
      }
    );

    const putParams = {
      TableName: tablename,
      Item: pledges,
    };

    await dynamoDBPutPromise(putParams);
    return false;
  } catch (e) {
    console.log(e);

    return true;
  }
}
