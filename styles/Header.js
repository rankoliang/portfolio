import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  background: var(--navbar-bg);
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 2em;
  padding: 0 0.1em;

  & > * {
    flex: 1;
  }

  & + * {
    padding-top: 2em;
  }
`;

export const NavbarStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavbarEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.svg`
  font-size: 2rem;
`;
