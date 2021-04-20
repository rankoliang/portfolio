import Image from 'next/image';
import StyledProject, { ProjectLinks } from '../styles/Project';
import GithubLink from './buttons/GithubLink';
import Button from './Button.js';
import TerminalImage from './TerminalImage';

const Project = ({ project: { title, imageProps, description, links } }) => {
  return (
    <StyledProject>
      <h3>{title}</h3>
      <ProjectImage {...imageProps} />
      <p>{description}</p>
      <ProjectLinks>
        {links?.github && <GithubLink href={links.github} target="_blank" />}
        {links?.visit && (
          <Button as="a" href={links.visit} target="_blank" color="primary">
            Visit
          </Button>
        )}
      </ProjectLinks>
    </StyledProject>
  );
};

const ProjectImage = ({ format, ...imageProps }) => {
  switch (format) {
    case 'terminal':
      return <TerminalImage {...imageProps} />;
    case 'xps15':
      imageProps = { width: 2000, height: 1019, ...imageProps };
      break;
  }
  return (
    <div>
      <Image layout="responsive" {...imageProps} />
    </div>
  );
};

export default Project;
