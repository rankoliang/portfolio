import styled from 'styled-components';

export const FooterSection = styled.div`
  text-align: center;

  div& {
    display: flex;
    justify-content: center;
  }

  p& {
    a {
      color: var(--primary-600);
      display: inline;
    }
  }
`;

const StyledFooter = styled.footer`
  background: var(--gray-200);
  text-align: center;
`;

export default StyledFooter;
