import {
  StyledWindowFrame,
  WindowFrameBorder,
  StyledMenuBar,
  Minimize,
  Maximize,
  Close,
} from '../styles/WindowFrame';

const MenuBar = () => {
  return (
    <StyledMenuBar>
      <Minimize />
      <Maximize />
      <Close />
    </StyledMenuBar>
  );
};

const WindowFrame = ({ children }) => {
  return (
    <StyledWindowFrame>
      <MenuBar />
      <WindowFrameBorder>{children}</WindowFrameBorder>
    </StyledWindowFrame>
  );
};

export default WindowFrame;
