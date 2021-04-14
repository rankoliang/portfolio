import Image from 'next/image';
import {
  StyledBackground,
  StyledOccupation,
  StyledHero,
  Body,
} from '../styles/Hero';
import Name, { Occupation } from './Name';

const Background = () => {
  return (
    <StyledBackground>
      <Image
        alt=""
        src="/images/hero.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </StyledBackground>
  );
};

const Hero = () => {
  return (
    <StyledHero>
      <Background />
      <Body>
        <StyledOccupation as={Occupation} />
        <Name mobile={{ size: 36 }} />
      </Body>
    </StyledHero>
  );
};

export default Hero;
