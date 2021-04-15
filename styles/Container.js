import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1em;
  margin: ${({ marginY }) => marginY} auto;
  width: 100%;
  max-width: 75ch;

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;

Container.defaultProps = {
  marginY: 0,
};

export default Container;
