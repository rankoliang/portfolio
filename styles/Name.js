import styled from 'styled-components';

export const StyledName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile: { size } }) => size};
  text-align: center;
  text-transform: uppercase;
`;

export const LastName = styled.span`
  color: var(--primary-400);
`;
