import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  height: 100%;
`;

export const StyledOccupation = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
  position: relative;
  top: 0.25em;
`;

export const Body = styled.section`
  background: rgba(51, 51, 51, 0.5);
  padding: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 0.25em;
  }
`;

export const Titles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const BlurredImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(2rem);
  transform: scale(1.2);
`;

const hint = keyframes`
  0%, 80%, 90% {
    transform: inherit;
  }

  85%, 95% {
    transform: translateY(0.5em);
  }

`;

export const ScrollDown = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  bottom: 1em;
  margin: 0 auto;
  left: 0;
  right: 0;
  transition: transform 0.25s;
  -webkit-tap-highlight-color: transparent;

  & > svg {
    animation-duration: 10s;
    animation-name: ${hint};
    animation-iteration-count: infinite;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.5);
  }

  @media screen and (max-height: 300px) {
    & {
      visibility: hidden;
    }
  }
`;
