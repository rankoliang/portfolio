import { useState } from 'react';
import SectionHeader from './SectionHeader';
import Section from '../styles/Section';
import Button from './Button';
import Form, { FormLabel, FormInput, FormControl } from '../styles/ContactForm';

const handleChange = (setState) => (event) => {
  setState(event.currentTarget.value);
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendReceipt, setSendReceipt] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, subject, message, sendReceipt };
    fetch('/api/contact', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then(console.log)
      .then(() => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      });
  };

  return (
    <Section>
      <SectionHeader>Contact Me</SectionHeader>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={handleChange(setName)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Subject</FormLabel>
          <FormInput
            value={subject}
            onChange={handleChange(setSubject)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <FormInput
            as="textarea"
            value={message}
            rows="8"
            onChange={handleChange(setMessage)}
            required
          />
        </FormControl>

        <FormControl
          flexDirection="row"
          onClick={() => {
            setSendReceipt(!sendReceipt);
          }}
          crossAxisCenter
        >
          <FormInput type="checkbox" checked={sendReceipt} readOnly />
          <FormLabel>Send receipt?</FormLabel>
        </FormControl>

        <Button color="primary">Submit</Button>
      </Form>
    </Section>
  );
};

export default ContactForm;
