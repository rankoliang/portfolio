import {
  StyledHeader,
  NavbarStart,
  NavbarEnd,
  NavbarCenter,
} from '../styles/Header';
import GithubIcon from './icons/GithubIcon';
import Name from './Name';
import Brand from './Brand';

const Header = () => {
  return (
    <StyledHeader>
      <NavbarStart />
      <NavbarCenter>
        <Brand>
          <Name mobile={{ size: '1.5rem' }} />
        </Brand>
      </NavbarCenter>
      <NavbarEnd>
        <a href="https://github.com/rankoliang/" aria-label="Github Profile">
          <GithubIcon size="1.5rem" />
        </a>
      </NavbarEnd>
    </StyledHeader>
  );
};

export default Header;
