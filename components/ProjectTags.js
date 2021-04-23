import { Tags } from '../styles/Project';
import Button from './Button';
import RubyTag from './projectTags/Ruby';
import RailsTag from './projectTags/Rails';
import ReactTag from './projectTags/React';
import RSpecTag from './projectTags/RSpec';
import ReduxTag from './projectTags/Redux';
import DockerTag from './projectTags/Docker';
import AWSTag from './projectTags/AWS';

const tagComponents = {
  ruby: RubyTag,
  rails: RailsTag,
  react: ReactTag,
  rspec: RSpecTag,
  redux: ReduxTag,
  docker: DockerTag,
  aws: AWSTag,
};

const ProjectTags = ({ tags = [] }) => {
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
