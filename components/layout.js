import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ranko Liang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ranko Liang's personal website. See my showcase of projects and contact me."
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
