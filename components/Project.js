import StyledProject, { ProjectLinks, ProjectInfo } from '../styles/Project';
import GithubLink from './buttons/GithubLink';
import Button from './Button.js';
import WindowFrame from './WindowFrame';
import TerminalImage from './TerminalImage';
import ProjectTags from './ProjectTags';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const Project = ({
  project: { title, imageProps, description, links, tags = [] },
}) => {
  return (
    <StyledProject imageFormat={imageProps.imageFormat}>
      <ProjectImage {...imageProps} />
      <ProjectInfo>
        <h3>{title}</h3>
        <ProjectTags tags={tags} />
        <p suppressHydrationWarning>{description}</p>
        <ProjectLinks>
          {links?.github && <GithubLink href={links.github} target="_blank" />}
          {links?.visit && (
            <Button as="a" href={links.visit} target="_blank" color="primary">
              Visit
            </Button>
          )}
        </ProjectLinks>
      </ProjectInfo>
    </StyledProject>
  );
};

const ProjectImage = ({ format, ...imageProps }) => {
  switch (format) {
    case 'terminal':
      return <TerminalImage {...imageProps} />;
    case 'screenshot':
      return (
        <WindowFrame>
          <ImageWithPlaceholder
            layout="responsive"
            width={1920}
            height={1080}
            {...imageProps}
          />
        </WindowFrame>
      );
    case 'xps15':
      imageProps = { width: 2000, height: 1019, ...imageProps };
      break;
  }
  return (
    <div>
      <ImageWithPlaceholder layout="responsive" {...imageProps} />
    </div>
  );
};

export default Project;
