import styled from 'styled-components';
import Section from '../styles/Section';
import SectionHeader from './SectionHeader';
import Project from './Project';

const StyledProjects = styled(Section)`
  & > *:not(:first-child):not(:last-child) {
    margin-bottom: 0;
  }

  & > *:not(:first-child):not(:last-child)::after {
    content: '';
    display: block;
    border-bottom: 1px solid var(--gray-300);
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const Projects = ({ projects = [] }) => {
  return (
    <StyledProjects>
      <SectionHeader>Projects</SectionHeader>
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
