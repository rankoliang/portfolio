This is the repository for my portfolio found at https://rankoliang.com/.
This website was designed by myself and uses [next.js](https://nextjs.org/) and [styled components](https://styled-components.com/).

## Getting Started

First, install the dependencies with

```bash
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The contact form uses [Amazon SES](https://aws.amazon.com/ses/) to send emails.
You will need to set the following environment variables in `.env.local`

- `AWS_ACCESS_KEY_ID_PORTFOLIO`
- `AWS_SECRET_ACCESS_KEY_PORTFOLIO`
- `AWS_REGION_PORTFOLIO`
- `EMAIL`
  - The email the contact form response should be sent from.
- `SOURCE_EMAIL`
  - Your email with your name
  - Example: `John Smith <johnsmith@example.com>`

You will also need to update the name in `templates/contactEmail.json` and configure it in Amazon SES.
