import RubyIcon from '../icons/RubyIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const RubyTag = () => {
  return (
    <ProjectTagWrapper
      as="a"
      href="https://www.ruby-lang.org/en/"
      background="#d91404"
      outlined
    >
      <RubyIcon />
      <span>Ruby</span>
    </ProjectTagWrapper>
  );
};

export default RubyTag;
