import styled from 'styled-components';

export const MenuIcon = styled.span`
  height: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  border-radius: 50%;
`;

MenuIcon.defaultProps = {
  size: 1,
};

export const Minimize = styled(MenuIcon)`
  background: #27ae60;
`;

export const Maximize = styled(MenuIcon)`
  background: #f2c94c;
`;

export const Close = styled(MenuIcon)`
  background: #eb5757;
`;

export const StyledMenuBar = styled.div`
  padding: ${({ size }) => (size * 3) / 4}rem;
  display: flex;
  justify-content: flex-end;

  & > span:not(:last-child) {
    margin-right: ${({ size }) => size / 4}em;
  }
`;

StyledMenuBar.defaultProps = {
  size: 1,
};

export const TerminalFrame = styled.div`
  margin: 0 auto;
  max-width: 55ch;
  background: var(--gray-800);
  border-radius: 0.5rem;
`;

export const TerminalImageWrapper = styled.div`
  padding: 1.5em;
  padding-top: 0;
`;
