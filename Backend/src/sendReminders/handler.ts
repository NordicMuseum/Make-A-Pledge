
import * as moment from 'moment-timezone';
import * as Mailgun from 'mailgun-js';
import { v1 as uuid } from 'uuid';

import { ICallback, IEventPayload, HTTPStatusCodes } from '../lambdaTypes';

import { isObjectEmpty, objectOnlyContainsKeys } from '../utilities';
import { dynamoDBScanPromise } from '../dynamoDBUtilities';

import { readFileSync } from 'fs';


const mailgun = Mailgun({
  apiKey: process.env.mailgunAPIKey,
  domain: process.env.mailgunDomain,
});

export const sendReminders = async (event: IEventPayload, context, callback: ICallback) => {
  try {
    // const sixMonthsPast = moment()
    //   .tz('Europe/Stockholm')
    //   .subtract(6, 'months')
    //   .format('M/D/YYYY');

    const aDayAgo = moment()
      .tz('Europe/Stockholm')
      .subtract(1, 'days')
      .format('M/D/YYYY');

    const scanParams = {
      TableName: process.env.tableName,
      FilterExpression: 'signed_up_date = :a_day_ago',
      ExpressionAttributeValues: { ':a_day_ago': aDayAgo }
      // FilterExpression: 'signed_up_date = :six_months_past',
      // ExpressionAttributeValues: { ':six_months_past': sixMonthsPast }
    };

    const results = await dynamoDBScanPromise(scanParams);

    if (results.Items.length === 0) {
      return;
    }

    const emailsChunkedBySubcategory = results.Items.reduce((obj, emailUser) => {
      const subcategory = emailUser.subcategory;
      obj[subcategory] = (obj[subcategory] || []).concat(emailUser);

      return obj;
    }, {});

    const functionName = context.functionName.split('-').pop();
    const from = `Nordiska Museet Löftesinsamling <NordiskaMuseet@${process.env.mailgunDomain}>`;

    Object.keys(emailsChunkedBySubcategory).forEach(function(subcategory) {
      const chunk = emailsChunkedBySubcategory[subcategory];
      const emails = chunk.map(emailUser => emailUser.email);
      const uniqueEmailKeys = emails.reduce((obj, email) => {
        obj[email] = { id: uuid() };
        return obj;
      }, {});

      const html = readFileSync(`./src/${functionName}/emails/reminder${subcategory}.html`, 'utf8');

      const emailData = {
        from,
        to: emails,
        // 'recipient-variables' is required for batch sending
        'recipient-variables': uniqueEmailKeys,
        subject: 'Höll du ditt löfte?',
        html,
      };

      mailgun.messages().send(emailData);
    });
  } catch (e) {
    console.log(e);

    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      body: 'Server Error. Check server error logs.',
    });
  }
}
