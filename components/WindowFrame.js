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

const WindowFrame = ({ children, borderWidth, menuSize, ...props }) => {
  return (
    <StyledWindowFrame {...props}>
      <MenuBar size={menuSize} />
      <WindowFrameBorder borderWidth={borderWidth}>
        <div style={{ overflow: 'hidden', height: '100%' }}>{children}</div>
      </WindowFrameBorder>
    </StyledWindowFrame>
  );
};

export default WindowFrame;
