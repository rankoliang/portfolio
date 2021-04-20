import Image from 'next/image';
import {
  TerminalFrame,
  TerminalImageWrapper,
  StyledMenuBar,
  Minimize,
  Maximize,
  Close,
} from '../styles/TerminalImage';

const MenuBar = () => {
  return (
    <StyledMenuBar>
      <Minimize />
      <Maximize />
      <Close />
    </StyledMenuBar>
  );
};

const TerminalImage = ({ ...imageProps }) => {
  return (
    <TerminalFrame>
      <MenuBar />
      <TerminalImageWrapper>
        <Image layout="responsive" {...imageProps} />
      </TerminalImageWrapper>
    </TerminalFrame>
  );
};

export default TerminalImage;
