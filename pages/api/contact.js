export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message, sendReceipt } = JSON.parse(req.body);

    res.status(200).send('Message sent successfully!');
  } else {
    res.status(400).send('Bad request');
  }
}
