import { useEffect, useState, useRef, forwardRef } from 'react';
import SectionHeader from './SectionHeader';
import Section from '../styles/Section';
import Button from './Button';
import Form, { FormLabel, FormInput, FormControl } from '../styles/ContactForm';

const handleChange = (setState) => (event) => {
  setState(event.currentTarget.value);
};

const ContactForm = (_, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const emailRef = useRef();
  const emailConfirmationRef = useRef();

  useEffect(() => {
    if (emailConfirmation && email !== emailConfirmation) {
      [emailRef, emailConfirmationRef].forEach((ref) => {
        ref.current.setCustomValidity('Your emails do not match');
      });
    } else {
      [emailRef, emailConfirmationRef].forEach((ref) => {
        ref.current.setCustomValidity('');
      });
    }
  }, [email, emailConfirmation]);

  const resetForm = () => {
    setSubject('');
    setMessage('');
    emailRef.current.setCustomValidity('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, email, emailConfirmation, subject, message };

    fetch('/api/contact', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          resetForm();
        }

        return response.text();
      })
      .then(alert)
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Section ref={ref}>
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
            ref={emailRef}
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Email</FormLabel>
          <FormInput
            ref={emailConfirmationRef}
            type="email"
            value={emailConfirmation}
            onChange={handleChange(setEmailConfirmation)}
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

        <Button color="primary">Submit</Button>
      </Form>
    </Section>
  );
};

export default forwardRef(ContactForm);
