import DockerIcon from '../icons/DockerIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const DockerTag = () => {
  return (
    <ProjectTagWrapper background="#019bc6" outlined>
      <DockerIcon />
      <span>Docker</span>
    </ProjectTagWrapper>
  );
};

export default DockerTag;
