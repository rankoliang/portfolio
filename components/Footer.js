import StyledFooter, { FooterSection } from '../styles/Footer';
import Container from '../styles/Container';
import GithubIcon from './icons/GithubIcon';
import Button from './Button';

const Footer = () => {
  return (
    <StyledFooter>
      <Container gap="0.5em">
        <FooterSection as="p">
          Designed and developed by{' '}
          <a href="https://github.com/rankoliang/">Ranko Liang</a>.
        </FooterSection>

        <FooterSection>
          <Button
            as="a"
            href="https://github.com/rankoliang/portfolio/"
            color="black"
            size="1rem"
            outlined
          >
            <GithubIcon />
            <span>Source code</span>
          </Button>
        </FooterSection>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
