import RSpecIcon from '../icons/RSpecIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const RSpecTag = () => {
  return (
    <ProjectTagWrapper background="#7fd2ed" text="#ef4561" outlined>
      <RSpecIcon />
      <span>RSpec</span>
    </ProjectTagWrapper>
  );
};

export default RSpecTag;
