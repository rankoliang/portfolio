import Image from 'next/image';
import WindowFrame from './WindowFrame';

const TerminalImage = ({ ...imageProps }) => {
  return (
    <WindowFrame>
      <Image layout="responsive" {...imageProps} />
    </WindowFrame>
  );
};

export default TerminalImage;
