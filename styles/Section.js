import styled from 'styled-components';

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 1em;
  }

  & > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default Section;
