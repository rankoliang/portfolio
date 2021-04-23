import Image from 'next/image';
import WindowFrame from './WindowFrame';

const TerminalImage = ({ placeholderSrc, ...imageProps }) => {
  return (
    <WindowFrame
      maxWidth="55ch"
      borderPadding="1.25em"
      menuSize={1}
      borderRadius="0.5em"
    >
      <Image layout="responsive" {...imageProps} />
    </WindowFrame>
  );
};

export default TerminalImage;
