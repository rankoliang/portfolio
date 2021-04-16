import Section from '../styles/Section';
import SectionHeader from './SectionHeader';

const Projects = ({ projects = [] }) => {
  return (
    <Section>
      <SectionHeader>Projects</SectionHeader>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </Section>
  );
};

export default Projects;
