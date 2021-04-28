import StyledProject, {
  ProjectLinks,
  ProjectInfo,
  CompactProject,
} from '../styles/Project';
import GithubLink from './buttons/GithubLink';
import Button from './Button.js';
import WindowFrame from './WindowFrame';
import TerminalImage from './TerminalImage';
import ProjectTags from './ProjectTags';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const Project = ({
  project: { title, imageProps, description, links, tags = [] },
}) => {
  let ProjectWrapper;
  switch (imageProps.format) {
    case 'compact':
      ProjectWrapper = CompactProject;
      break;
    default:
      ProjectWrapper = StyledProject;
  }

  return (
    <ProjectWrapper>
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
    </ProjectWrapper>
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
    case 'compact':
      imageProps = {
        width: 500,
        height: 500,
        layout: 'intrinsic',
        objectFit: 'cover',
        objectPosition: 'center top',
        overflow: 'hidden',
        ...imageProps,
      };
      break;
  }
  return (
    <WindowFrame>
      <ImageWithPlaceholder layout="responsive" {...imageProps} />
    </WindowFrame>
  );
};

export default Project;
