import styled from 'styled-components';

export const ImageWrapper = styled.div`
  &, & > div {
    height: 100%;
  }

  position: relative;
  overflow: hidden;
`;

const Placeholder = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  objectFit: cover,
  objectPosition: center;
  filter: blur(2rem);
  transform: scale(1.2);
`;

export default Placeholder;
