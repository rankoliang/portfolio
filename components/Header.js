import {
  StyledHeader,
  NavbarStart,
  NavbarEnd,
  NavbarCenter,
} from '../styles/Header';
import GithubIcon from './icons/GithubIcon';
import Name from './Name';

const Header = () => {
  return (
    <StyledHeader>
      <NavbarStart />
      <NavbarCenter>
        <a href="/">
          <Name mobile={{ size: '1.25rem' }} />
        </a>
      </NavbarCenter>
      <NavbarEnd>
        <a href="https://github.com/rankoliang/">
          <GithubIcon size="1.5rem" />
        </a>
      </NavbarEnd>
    </StyledHeader>
  );
};

export default Header;
