import Link from 'next/link';
import { useRouter } from 'next/router';
import StyledBrand from '../styles/Brand';

const Brand = ({ children }) => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (router.pathname === '/') {
    return (
      <StyledBrand as="button" onClick={scrollToTop}>
        {children}
      </StyledBrand>
    );
  } else {
    return (
      <Link href="/" passHref>
        <StyledBrand>{children}</StyledBrand>
      </Link>
    );
  }
};

export default Brand;
