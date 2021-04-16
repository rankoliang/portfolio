import styled, { keyframes } from 'styled-components';

const hint = keyframes`
  0%, 80%, 90% {
    transform: inherit;
  }

  85%, 95% {
    transform: translateY(1rem);
  }

`;

const StyledScrollDown = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  bottom: 1rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: ${({ size, hoverScale }) => size * hoverScale}rem;
  -webkit-tap-highlight-color: transparent;

  &,
  & .wrapper {
    overflow: visible;
    height: ${({ size }) => size}rem;
    width: ${({ size }) => size}rem;
  }

  & .wrapper {
    animation-duration: 10s;
    animation-name: ${hint};
    animation-iteration-count: infinite;
  }

  & .icon {
    transition: transform 0.25s;
    transform: translate(
        calc(-50% + ${({ size }) => size / 2}rem),
        calc(-50% + ${({ size }) => size / 2}rem)
      )
      scale(${({ hoverScale }) => (1 / hoverScale).toFixed(4)});
  }

  &:hover .icon,
  &:focus .icon {
    cursor: pointer;
    transform: scale(1)
      translate(
        calc(-50% + ${({ size }) => size / 2}rem),
        calc(-50% + ${({ size }) => size / 2}rem)
      );
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
