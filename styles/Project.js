import styled from 'styled-components';
import Section from './Section';

export const ProjectLinks = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }
`;

export const Tags = styled(ProjectLinks)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectInfo = styled.div`
  margin-top: 1em;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  h3 {
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

const StyledProject = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child)::after {
  margin: 3rem 0;
  }
`;

export default StyledProject;
