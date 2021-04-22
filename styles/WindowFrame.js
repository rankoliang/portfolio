import styled, { css } from 'styled-components';

export const MenuIcon = styled.span`
  height: ${({ size }) => size}em;
  width: ${({ size }) => size}em;
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
  font-size: ${({ size }) => size}rem;

  & > span:not(:last-child) {
    margin-right: ${({ size }) => size / 4}rem;
  }
`;

StyledMenuBar.defaultProps = {
  size: 0.6,
};

export const StyledWindowFrame = styled.div`
  margin: 0 auto;
  background: var(--gray-900);
  border-radius: ${({ borderRadius }) => borderRadius};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
`;

StyledWindowFrame.defaultProps = {
  borderRadius: '0.35rem',
};

export const WindowFrameBorder = styled.div`
  padding: ${({ padding }) => padding};
  padding-top: 0;
`;

WindowFrameBorder.defaultProps = {
  padding: '6px',
};
