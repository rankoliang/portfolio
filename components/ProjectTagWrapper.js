import Button from './Button';

const ProjectTagWrapper = ({ children, color = 'black', ...props }) => {
  return (
    <Button as="div" color={color} size="1.1rem" padding="0.05rem 0.3rem" gap="0.15rem" {...props}>
      {children}
    </Button>
  );
};

export default ProjectTagWrapper;
