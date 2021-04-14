import Hero from '../components/Hero';
import getPlaceholder from '../utils/getPlaceholder';

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
    </>
  );
}
