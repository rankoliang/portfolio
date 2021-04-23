import AWSIcon from '../icons/AWSIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const AWSTag = () => {
  return (
    <ProjectTagWrapper foreground="#F7A80D" background="var(--gray-700)">
      <AWSIcon />
      <span>AWS</span>
    </ProjectTagWrapper>
  );
};

export default AWSTag;
