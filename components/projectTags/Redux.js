import ReduxIcon from '../icons/ReduxIcon';
import ProjectTagWrapper from '../ProjectTagWrapper';

const ReduxTag = () => {
  return (
    <ProjectTagWrapper
      as="a"
      href="https://redux.js.org/"
      background="#764abc"
      outlined
    >
      <ReduxIcon />
      <span>Redux</span>
    </ProjectTagWrapper>
  );
};

export default ReduxTag;
