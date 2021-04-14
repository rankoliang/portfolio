import { StyledName, LastName } from '../styles/Name';

export const Occupation = (props) => {
  return <div {...props}>Full-Stack Engineer</div>;
};

const Name = (props) => {
  return (
    <StyledName {...props}>
      Ranko <LastName>Liang</LastName>
    </StyledName>
  );
};

export default Name;
