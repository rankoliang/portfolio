import ReactIcon from '../icons/ReactIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const ReactTag = () => {
  return (
    <ProjectTagWrapper
      background="var(--gray-700)"
      foreground="#61dafb"
      color="react"
    >
      <ReactIcon />
      <span>React</span>
    </ProjectTagWrapper>
  );
};

export default ReactTag;
