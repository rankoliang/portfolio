import { useEffect } from 'react';
import Hero from '../components/Hero';
import getPlaceholder from '../utils/getPlaceholder';
import Container from '../styles/Container';
import About from '../components/About';
import Projects from '../components/Projects';
import projects from '../content/projects';

export const getStaticProps = async () => {
  const hero = await getPlaceholder('/images/hero.jpg');

  return {
    props: {
      hero,
    },
  };
};

export default function Home({ hero }) {
  useEffect(() => {
    document.documentElement.classList.add('no-focus-outline');

    document.body.addEventListener('keyup', (event) => {
      if (event.key === 'Tab') {
        document.documentElement.classList.remove('no-focus-outline');
      }
    });
  }, []);

  return (
    <>
      <Hero hero={hero} />
      <Container marginY="0.75em">
        <Projects projects={projects} />
        <About />
      </Container>
    </>
  );
}
