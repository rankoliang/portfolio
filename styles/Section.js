import styled from 'styled-components';

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 1em;
  }

  & > p:not(:last-child) {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`;

export default Section;
