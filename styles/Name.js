import styled, { css } from 'styled-components';
import breakpoints from './breakpoints';

export const StyledName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile: { size } }) => size};
  text-align: center;
  text-transform: uppercase;

  ${({ tablet }) =>
    tablet &&
    css`
      @media screen and (min-width: ${breakpoints.tablet}) {
        & {
          font-size: ${tablet.size};
        }
      }
    `}}
`;

export const LastName = styled.span`
  color: var(--primary-400);
`;
