import styled from 'styled-components';

const Container = styled.div`
  padding: var(--container-vertical-padding) var(--container-horizontal-padding);
  margin: 0 auto;
  width: 100%;
  max-width: var(--container-max-width);

  & > *:not(:last-child) {
    margin-bottom: ${({ gap }) => gap};
  }
`;

Container.defaultProps = {
  gap: '1em',
};

export default Container;
