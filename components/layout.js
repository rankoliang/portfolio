import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);

const Layout = ({ children }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
