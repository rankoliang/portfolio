import { useState } from 'react';
import Image from 'next/image';
import Placeholder, { ImageWrapper } from '../styles/Placeholder';

const ImageWithPlaceholder = ({ placeholderSrc, ...imageProps }) => {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  return (
    <ImageWrapper>
      {placeholderVisible && (
        <Placeholder src={placeholderSrc} alt="" aria-hidden />
      )}
      <Image
        {...imageProps}
        onLoad={() => {
          setPlaceholderVisible(false);
        }}
      />
    </ImageWrapper>
  );
};

export default ImageWithPlaceholder;
