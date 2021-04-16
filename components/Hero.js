import { useRef } from 'react';
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
import ScrollDown from '../components/ScrollDown';

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
  const heroRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollToNext = () => {
    const hero = heroRef?.current;

    const sibling = hero?.nextElementSibling;

    sibling?.scrollIntoView({
      behavior: 'smooth',
    });

    scrollRef.current?.blur();
  };

  return (
    <StyledHero ref={heroRef}>
      <Background imgSrc={imgSrc} imgBase64={imgBase64} />
      <Body>
        <Titles>
          <StyledOccupation as={Occupation} />
          <Name
            as="h1"
            mobile={{ size: '2.5rem' }}
            tablet={{ size: '3.5rem' }}
          />
        </Titles>
        <GithubLink />
      </Body>
      <ScrollDown
        onClick={scrollToNext}
        size={4}
        hoverScale={1.5}
        ref={scrollRef}
        aria-hidden
      />
    </StyledHero>
  );
};

export default Hero;
