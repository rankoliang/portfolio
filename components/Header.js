import {
  StyledHeader,
  NavbarStart,
  NavbarEnd,
  NavbarCenter,
  Logo,
} from '../styles/Header';
import { DiGithubBadge } from 'react-icons/di';
import Name from './Name';

const Header = () => {
  return (
    <StyledHeader>
      <NavbarStart />
      <NavbarCenter>
        <a href="/">
          <Name mobile={{ size: '1.25em' }} />
        </a>
      </NavbarCenter>
      <NavbarEnd>
        <a href="https://github.com/rankoliang/">
          <Logo as={DiGithubBadge} />
        </a>
      </NavbarEnd>
    </StyledHeader>
  );
};

export default Header;
