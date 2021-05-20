import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import getPlaceholder from '../utils/getPlaceholder';
import Container from '../styles/Container';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import getProjects from '../utils/getProjects';

export const getStaticProps = async () => {
  const hero = await getPlaceholder('/images/hero.jpg');
  const projects = await getProjects();

  return {
    props: {
      hero,
      projects,
    },
  };
};

export default function Home({ hero, projects }) {
  const contactFormRef = useRef();

  useEffect(() => {
    document.documentElement.classList.add('no-focus-outline');

    document.body.addEventListener('keyup', (event) => {
      if (event.key === 'Tab') {
        document.documentElement.classList.remove('no-focus-outline');
      }
    });

    document.body.addEventListener('mousedown', () => {
      document.documentElement.classList.add('no-focus-outline');
    });
  }, []);

  return (
    <>
      <Hero hero={hero} contactFormRef={contactFormRef} />
      <Container as="main">
        <Projects projects={projects} />
        <About />
        <ContactForm ref={contactFormRef} />
      </Container>
    </>
  );
}
