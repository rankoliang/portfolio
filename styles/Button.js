import styled, { css } from 'styled-components';

const theme = {
  text: ({ color }) => {
    return {
      rspec: '#ef4561',
    }[color];
  },
  background: ({ color }) => {
    const defaultColor = color;

    return (
      {
        primary: 'var(--primary-500)',
        rails: '#cc0000',
        ruby: '#d91404',
        react: 'var(--gray-700)',
        rspec: '#7fd2ed',
      }[color] || defaultColor
    );
  },
  foreground: ({ color }) => {
    const defaultColor = 'white';

    return (
      {
        white: 'black',
        black: 'white',
        react: '#61dafb',
        rspec: '#ef4561',
      }[color] || defaultColor
    );
  },
};

const fallback = (...functions) => (props) => {
  return functions.find((fn) => fn(props));
};

const outlinedStyles = ({ outlined }) => {
  if (outlined) {
    return css`
      color: ${fallback(theme.text, theme.background)};
      box-shadow: inset 0 0 0 0.1em ${theme.background};

      button&:focus,
      a&:hover {
        box-shadow: inset 0 0 0 2em ${theme.background};
        color: ${theme.foreground};
      }
    `;
  } else {
    return css`
      color: ${fallback(theme.text, theme.foreground)};
      box-shadow: inset 0 0 0 2em ${theme.background};

      button&:focus,
      a&:hover {
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
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
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

  & > *:not(:last-child) {
    margin-right: ${({ gap }) => gap};
  }

  button&:active,
  a&:active {
    transform: translateY(0.1em);
  }
`;

StyledButton.defaultProps = {
  color: 'white',
  outlined: false,
  size: '1.25rem',
  padding: '0.15em 0.5em',
  gap: '0.25rem',
};

export default StyledButton;
