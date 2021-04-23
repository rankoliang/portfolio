import styled, { css } from 'styled-components';

const theme = {
  text: ({ text }) => {
    if (text) return text;
  },
  background: ({ color, background }) => {
    if (background) return background;

    const defaultColor = color;

    return (
      {
        primary: 'var(--primary-500)',
      }[color] || defaultColor
    );
  },
  foreground: ({ color, foreground }) => {
    if (foreground) return foreground;

    const defaultColor = 'white';

    return (
      {
        white: 'black',
        black: 'white',
      }[color] || defaultColor
    );
  },
};

const fallback = (...functions) => (props) => {
  return functions.find((fn) => fn(props));
};

const outlinedStyles = ({ outlined }) => {
  let primary;
  let secondary;
  let idle;
  let active;
  let outlinedStyle = css`
    box-shadow: inset 0 0 0 0.1em ${theme.background};
  `;
  let filledStyle = css`
    box-shadow: inset 0 0 0 2em ${theme.background};
  `;

  if (outlined) {
    primary = theme.background;
    secondary = theme.foreground;
    idle = outlinedStyle;
    active = filledStyle;
  } else {
    primary = theme.foreground;
    secondary = theme.background;
    idle = filledStyle;
    active = outlinedStyle;
  }

  return css`
    color: ${fallback(theme.text, primary)};
    ${idle}

    ${({ hoverAnimationDisabled }) =>
      hoverAnimationDisabled ||
      css`
        button&:focus,
        button&:hover,
        a&:focus,
        a&:hover {
          svg {
            color: ${fallback(theme.text, secondary)};
          }

          ${active}
          color: ${secondary};
        }
      `}
  `;
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

  ${({ margin }) =>
    margin &&
    css`
      margin: ${({ margin }) => margin};
    `}

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

  svg {
    transition: inherit;
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
