import { Tags } from '../styles/Project';
import Button from './Button';
import RubyTag from './projectTags/Ruby';
import RailsTag from './projectTags/Rails';

const tagComponents = { Ruby: RubyTag, Rails: RailsTag };

const ProjectTags = ({ tags = Object.keys(tagComponents) }) => {
  console.log(tags);
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
