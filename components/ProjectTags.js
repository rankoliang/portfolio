import { Tags } from '../styles/Project';
import Button from './Button';
import RubyTag from './projectTags/Ruby';
import RailsTag from './projectTags/Rails';
import ReactTag from './projectTags/React';

const tagComponents = { Ruby: RubyTag, Rails: RailsTag, React: ReactTag };

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
