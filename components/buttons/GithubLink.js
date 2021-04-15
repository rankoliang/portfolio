import Button from '../Button';
import GithubIcon from '../icons/GithubIcon';

const GithubLink = ({ href = 'https://github.com/rankoliang' }) => {
  return (
    <Button as="a" href={href}>
      <GithubIcon />
      <span>Github</span>
    </Button>
  );
};

export default GithubLink;
