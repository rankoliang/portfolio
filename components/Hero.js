import Image from 'next/image';
import {
  StyledBackground,
  StyledOccupation,
  StyledHero,
  BlurredImage,
  Titles,
  Body,
} from '../styles/Hero';
import Name, { Occupation } from './Name';
import GithubLink from './buttons/GithubLink';

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
        <Titles>
          <StyledOccupation as={Occupation} />
          <Name mobile={{ size: '3rem' }} />
        </Titles>
        <GithubLink />
      </Body>
    </StyledHero>
  );
};

export default Hero;
