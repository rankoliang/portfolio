import styled from 'styled-components';

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  height: 50vh;
`;

export const StyledOccupation = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
  position: absolute;
  top: 0;
`;

export const Body = styled.div`
  background: rgba(51, 51, 51, 0.5);
  padding: 0.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 0.25em;
  }
`;

export const Titles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.75em;
`;

export const StyledBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
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
