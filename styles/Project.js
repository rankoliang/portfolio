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
`;

const StyledProject = styled(Section)`
  margin-top: 3em;

  &:not(:last-child)::after {
    margin-top: 3em;
  }

  h3 {
    margin-top: 1em;
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default StyledProject;
