import ReactIcon from '../icons/ReactIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const ReactTag = () => {
  return (
    <ProjectTagWrapper
      as="a"
      href="https://reactjs.org/"
      background="var(--gray-700)"
      text="#61dafb"
      foreground="#61dafb"
      color="react"
    >
      <ReactIcon />
      <span>React</span>
    </ProjectTagWrapper>
  );
};

export default ReactTag;
