import DockerIcon from '../icons/DockerIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const DockerTag = () => {
  return (
    <ProjectTagWrapper
      as="a"
      href="https://www.docker.com/"
      background="#019bc6"
      outlined
    >
      <DockerIcon />
      <span>Docker</span>
    </ProjectTagWrapper>
  );
};

export default DockerTag;
