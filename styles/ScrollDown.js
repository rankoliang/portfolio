import styled, { keyframes } from 'styled-components';

const hint = keyframes`
  0%, 10%, 20% {
    transform: inherit;
  }

  5%, 15% {
    transform: translateY(1rem);
  }

`;

const StyledScrollDown = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0 auto;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  -webkit-tap-highlight-color: transparent;

  & .wrapper {
    animation-duration: 10s;
    animation-name: ${hint};
    animation-iteration-count: infinite;
    animation-delay: 5s;
  }

  & .icon {
    transition: transform 0.25s;
    transform: scale(${({ hoverScale }) => (1 / hoverScale).toFixed(4)});
  }

  &:hover .icon,
  &:focus .icon {
    cursor: pointer;
    transform: scale(1);
  }

  @media screen and (max-height: 300px) {
    & {
      visibility: hidden;
    }
  }
`;

StyledScrollDown.defaultProps = {
  hoverScale: 1.5,
  size: 1,
};

export default StyledScrollDown;
