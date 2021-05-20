import AWS from 'aws-sdk';

AWS.config.update({ region: process.env.AWS_REGION });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, emailConfirmation, subject, message } = JSON.parse(req.body);

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
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: message,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
      Source: process.env.SOURCE_EMAIL,
    };

    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
      .sendEmail(params)
      .promise();

    sendPromise
      .then((data) => {
        console.log({
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
        console.error({
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
