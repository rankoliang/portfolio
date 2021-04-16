import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  font-size: 1.25rem;
  padding: 0.1em 0.5em;
  color: white;
  border: 0.1em solid white;
  border-radius: 0.2em;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  box-shadow: inset 0 0 0 0 white;
  transition-property: box-shadow, color, transform;
  transition-duration: 0.4s, 0.4s, 0.1s;
  transition-timing-function: ease-out, ease-out, ease-out;

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }

  &:focus,
  &:hover {
    box-shadow: inset 0 0 0 2em white;
    color: black;
  }

  &:active {
    transform: translateY(0.1em);
  }
`;

export default StyledButton;
