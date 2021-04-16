import Image from 'next/image';
import StyledProject, { ProjectLinks } from '../styles/Project';
import GithubLink from './buttons/GithubLink';
import Button from './Button.js';

const Project = ({ project: { title, imageProps, description, links } }) => {
  return (
    <StyledProject>
      <h3>{title}</h3>
      <div>
        <Image layout="responsive" {...imageProps} />
      </div>
      <p>{description}</p>
      <ProjectLinks>
        {links?.github && <GithubLink href={links.github} />}
        {links?.visit && (
          <Button as="a" href={links.visit} color="primary">
            Visit
          </Button>
        )}
      </ProjectLinks>
    </StyledProject>
  );
};

export default Project;
