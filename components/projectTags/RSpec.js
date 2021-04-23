import RSpecIcon from '../icons/RSpecIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const RSpecTag = () => {
  return (
    <ProjectTagWrapper color="rspec" outlined>
      <RSpecIcon />
      <span>RSpec</span>
    </ProjectTagWrapper>
  );
};

export default RSpecTag;
