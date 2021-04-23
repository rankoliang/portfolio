import { Tags } from '../styles/Project';
import Button from './Button';
import RubyTag from './projectTags/Ruby';
import RailsTag from './projectTags/Rails';
import ReactTag from './projectTags/React';
import RSpecTag from './projectTags/RSpec';
import ReduxTag from './projectTags/Redux';

const tagComponents = {
  Ruby: RubyTag,
  Rails: RailsTag,
  React: ReactTag,
  RSpec: RSpecTag,
  Redux: ReduxTag,
};

const ProjectTags = ({ tags = Object.keys(tagComponents) }) => {
  return (
    <Tags>
      {tags.map((tagName) => {
        const TagComponent = tagComponents[tagName];

        if (TagComponent) {
          return <TagComponent key={tagName} />;
        } else {
          return (
            <Button as="div" size="1rem" color="black" key={tagName} outlined>
              {tagName}
            </Button>
          );
        }
      })}
    </Tags>
  );
};

export default ProjectTags;
