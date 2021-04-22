import {
  StyledWindowFrame,
  WindowFrameBorder,
  StyledMenuBar,
  Minimize,
  Maximize,
  Close,
} from '../styles/WindowFrame';

const MenuBar = ({ size }) => {
  return (
    <StyledMenuBar size={size}>
      <Minimize />
      <Maximize />
      <Close />
    </StyledMenuBar>
  );
};

const WindowFrame = ({ children, borderPadding, menuSize, ...props }) => {
  return (
    <StyledWindowFrame {...props}>
      <MenuBar size={menuSize} />
      <WindowFrameBorder padding={borderPadding}>{children}</WindowFrameBorder>
    </StyledWindowFrame>
  );
};

export default WindowFrame;
