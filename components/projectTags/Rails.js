import RailsIcon from '../icons/RailsIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const RailsTag = () => {
  return (
    <ProjectTagWrapper color="rails" outlined>
      <RailsIcon />
      <span>Rails</span>
    </ProjectTagWrapper>
  );
};

export default RailsTag;
