import { useRef } from 'react';
import Image from 'next/image';
import {
  StyledBackground,
  StyledOccupation,
  StyledHero,
  HeroLinks,
  BlurredImage,
  Titles,
  Body,
} from '../styles/Hero';
import Name, { Occupation } from './Name';
import GithubLink from './buttons/GithubLink';
import ScrollDown from '../components/ScrollDown';
import Button from './Button';
import { FiMail } from 'react-icons/fi';

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

const Hero = ({ hero: { imgSrc, imgBase64 }, contactFormRef }) => {
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
            tablet={{ size: '4.5rem' }}
          />
        </Titles>
        <HeroLinks>
          <GithubLink color="white" outlined />
          <Button
            onClick={() => {
              contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            color="white"
            outlined
          >
            <FiMail />
            <span>Contact</span>
          </Button>
        </HeroLinks>
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
