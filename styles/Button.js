import styled, { css } from 'styled-components';

const theme = {
  background: ({ color }) => {
    const defaultColor = color;

    return (
      {
        primary: 'var(--primary-500)',
      }[color] || defaultColor
    );
  },
  foreground: ({ color }) => {
    const defaultColor = 'white';

    return (
      {
        white: 'black',
        black: 'white',
      }[color] || defaultColor
    );
  },
};

const outlinedStyles = ({ outlined }) => {
  if (outlined) {
    return css`
      color: ${theme.background};
      box-shadow: inset 0 0 0 0.1em ${theme.background};

      &:focus,
      &:hover {
        box-shadow: inset 0 0 0 2em ${theme.background};
        color: ${theme.foreground};
      }
    `;
  } else {
    return css`
      color: ${theme.foreground};
      box-shadow: inset 0 0 0 2em ${theme.background};

      &:focus,
      &:hover {
        box-shadow: inset 0 0 0 0.1em ${theme.background};
        color: ${theme.background};
      }
    `;
  }
};

const StyledButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  background: none;
  font-size: 1.25rem;
  padding: 0.15em 0.5em;
  border-radius: 0.2em;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  transition-property: box-shadow, color, transform;
  transition-duration: 0.4s, 0.4s, 0.1s;
  transition-timing-function: ease-out, ease-out, ease-out;
  ${outlinedStyles}

  &:focus {
    outline: 3px solid var(--primary-500);
  }

  &:hover {
    cursor: pointer;
  }

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }

  &:active {
    transform: translateY(0.1em);
  }
`;

StyledButton.defaultProps = {
  color: 'white',
  outlined: false,
};

export default StyledButton;
