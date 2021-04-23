import AWSIcon from '../icons/AWSIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const AWSTag = () => {
  return (
    <ProjectTagWrapper
      as="a"
      href="https://aws.amazon.com/"
      text="#F7A80D"
      foreground="#F7A80D"
      background="var(--gray-700)"
    >
      <AWSIcon />
      <span>AWS</span>
    </ProjectTagWrapper>
  );
};

export default AWSTag;
