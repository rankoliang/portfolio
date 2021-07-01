import { useEffect, useState, useRef, forwardRef } from 'react';
import SectionHeader from './SectionHeader';
import Section from '../styles/Section';
import Button from './Button';
import Form, { FormLabel, FormInput, FormControl } from '../styles/ContactForm';
import ReCAPTCHA from 'react-google-recaptcha';

const handleChange = (setState) => (event) => {
  setState(event.currentTarget.value);
};

const ContactForm = (_, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const emailRef = useRef();
  const emailConfirmationRef = useRef();
  const recaptchaRef = useRef();

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

  const validate = (event) => {
    event.preventDefault();

    recaptchaRef.current.execute();
  };

  const handleSubmit = () => {
    const recaptchaToken = recaptchaRef.current.getValue();

    const data = {
      name,
      email,
      emailConfirmation,
      subject,
      message,
      recaptchaToken,
    };

    setSubmitting(true);

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
      })
      .finally(() => {
        setSubmitting(false);
        recaptchaRef.current.reset();
      });
  };

  return (
    <Section ref={ref}>
      <SectionHeader>Contact Me</SectionHeader>
      <Form onSubmit={validate}>
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

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          badge="inline"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          onChange={handleSubmit}
        />

        <Button color="primary" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </Section>
  );
};

export default forwardRef(ContactForm);
