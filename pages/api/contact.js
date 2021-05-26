import AWS from 'aws-sdk';
import pino from 'pino';

const logger = pino();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_PORTFOLIO,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_PORTFOLIO,
  region: process.env.AWS_REGION_PORTFOLIO,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, emailConfirmation, subject, message } = JSON.parse(
      req.body
    );

    if (email !== emailConfirmation) {
      res
        .status(400)
        .send(
          'Your emails did not match. Please ensure they match and try again.'
        );
    }

    const params = {
      Destination: {
        BccAddresses: [process.env.SOURCE_EMAIL],
        ToAddresses: [email],
      },
      Template: 'PersonalSiteContactForm',
      TemplateData: JSON.stringify({ subject, name, message }),
      Source: process.env.SOURCE_EMAIL,
    };

    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
      .sendTemplatedEmail(params)
      .promise();

    sendPromise
      .then((data) => {
        logger.info({
          date: new Date().toISOString(),
          req: { body: JSON.parse(req.body) },
          status: 'success',
          data,
        });

        res
          .status(200)
          .send(
            'Message sent! You should receive an email shortly in your inbox. Please check your spam folder if you have not received it.'
          );
      })
      .catch((err) => {
        logger.error({
          date: new Date().toISOString(),
          req: { body: JSON.parse(req.body) },
          status: 'error',
          error: err,
          stack: err.stack,
        });

        res
          .status(500)
          .send(
            `There was an unexpected error. You can send me a message at ${process.env.EMAIL}.`
          );
      });
  } else {
    res.status(501).send('Not Implemented');
  }
}
