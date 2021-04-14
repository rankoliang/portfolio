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
  font-size: 14px;
`

export const Body = styled.div`
  background: rgba(51, 51, 51, 0.5);
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;
