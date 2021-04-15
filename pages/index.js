import Hero from '../components/Hero';
import getPlaceholder from '../utils/getPlaceholder';
import Container from '../styles/Container';
import About from '../components/About';

export const getStaticProps = async () => {
  const hero = await getPlaceholder('/images/hero.jpg');

  return {
    props: {
      hero,
    },
  };
};

export default function Home({ hero }) {
  return (
    <>
      <Hero hero={hero} />
      <Container marginY="0.75em">
        <About />
      </Container>
    </>
  );
}
