import RailsIcon from '../icons/RailsIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const RailsTag = () => {
  return (
    <ProjectTagWrapper background="#cc0000" outlined>
      <RailsIcon />
      <span>Rails</span>
    </ProjectTagWrapper>
  );
};

export default RailsTag;
