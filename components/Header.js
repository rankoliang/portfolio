import { StyledHeader, NavbarStart, NavbarEnd, Logo } from '../styles/Header';
import { DiGithubBadge } from 'react-icons/di';
import Name from './Name';

const Header = () => {
  return (
    <StyledHeader>
      <NavbarStart />
      <Name />
      <NavbarEnd>
        <a href="https://github.com/rankoliang/">
          <Logo as={DiGithubBadge} />
        </a>
      </NavbarEnd>
    </StyledHeader>
  );
};

export default Header;
