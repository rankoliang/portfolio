import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  background: var(--navbar-bg);
  justify-content: space-between;
  align-items: center;
  color: white;
  height: var(--header-height);
  padding: 0 0.25em;
  z-index: 1;

  & > * {
    flex: 1;
  }

  & + * {
    padding-top: var(--header-height);
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
