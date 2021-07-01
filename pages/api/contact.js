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
    const { name, email, emailConfirmation, subject, message, recaptchaToken } =
      JSON.parse(req.body);

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

    const captchaResponse = await validateHuman(recaptchaToken);

    const { success: isHuman } = captchaResponse;

    if (!isHuman) {
      logger.error({ type: 'captcha response', captchaResponse });
      res.status(500).send('Captcha validation failed. Please try again');
    }

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

const validateHuman = async (recaptchaToken) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?` +
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    { method: 'POST' }
  );

  const data = await response.json();

  return data;
};
