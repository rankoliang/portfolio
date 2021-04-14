import Image from 'next/image';
import {
  StyledBackground,
  StyledOccupation,
  StyledHero,
  BlurredImage,
  Body,
} from '../styles/Hero';
import Name, { Occupation } from './Name';

const Background = ({ imgSrc, imgBase64 }) => {
  return (
    <StyledBackground>
      <BlurredImage src={imgBase64} alt="" aria-hidden />
      <Image
        alt=""
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </StyledBackground>
  );
};

const Hero = ({ hero: { imgSrc, imgBase64 } }) => {
  return (
    <StyledHero>
      <Background imgSrc={imgSrc} imgBase64={imgBase64} />
      <Body>
        <StyledOccupation as={Occupation} />
        <Name mobile={{ size: 36 }} />
      </Body>
    </StyledHero>
  );
};

export default Hero;
