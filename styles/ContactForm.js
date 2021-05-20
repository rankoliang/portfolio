import styled, { css } from 'styled-components';

export const FormLabel = styled.label`
  font-family: Lato, sans-serif;
  text-transform: uppercase;
  font-weight: medium;

  input[type='checkbox'] + & {
    margin-left: 0.25rem;
  }
`;

export const FormInput = styled.input`
  margin-top: 0.25rem;
  border: 1px solid var(--gray-600);
  padding: 0.3rem 0.5rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 1.15rem;
  resize: none;

  &:focus {
    outline: 1px solid var(--primary-500);
    border: 1px solid var(--primary-500);
  }

  &:focus:invalid {
    outline: 1px solid var(--red);
    border: 1px solid var(--red);
  }

  &[type='checkbox'] {
    margin-top: 0;
    width: 1em;
    height: 1em;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: 100%;

  ${({ crossAxisCenter }) =>
    crossAxisCenter &&
    css`
      align-items: center;
    `}
`;

export const MailResponse = styled.p`
  min-height: 1.4em;
  font-weight: 400;
  color: var(--${({ responseOK }) => (responseOK ? 'green' : 'red')});
`;

FormControl.defaultProps = {
  flexDirection: 'column',
  crossAxisCenter: false,
};

const Form = styled.form`
  width: 100%;

  & > * {
    margin-top: 0.75rem;
  }
`;

export default Form;
