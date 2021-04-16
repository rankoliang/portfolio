import Button from '../Button';
import GithubIcon from '../icons/GithubIcon';

const GithubLink = ({
  color = 'black',
  href = 'https://github.com/rankoliang',
  ...props
}) => {
  return (
    <Button as="a" href={href} color={color} {...props}>
      <GithubIcon />
      <span>Github</span>
    </Button>
  );
};

export default GithubLink;
