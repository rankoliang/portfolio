import StyledSectionHeader from '../styles/SectionHeader';

const SectionHeader = ({ children, ...props }) => {
  return <StyledSectionHeader {...props}>{children}</StyledSectionHeader>;
};

export default SectionHeader;
