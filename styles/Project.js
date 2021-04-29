import styled from 'styled-components';
import Section from './Section';

export const ProjectLinks = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }
`;

export const Tags = styled(ProjectLinks)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectInfo = styled.div`
  margin-top: 1em;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  h3 {
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

const StyledProject = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(2) {
    margin-top: 3rem;
  }

  &:not(:last-child)::after {
    margin: 3rem 0;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

export default StyledProject;

export const CompactProject = styled(StyledProject)`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${({ gap }) => `-${gap} -${gap}`};
  margin-top: -2rem;

  & > * {
    margin: ${({ gap }) => gap};
  }

  &:not(:last-child)::after {
    margin-top: 1rem;
    margin-left: calc(${({ gap }) => gap});
    margin-right: calc(${({ gap }) => gap});
  }

  ${ProjectInfo} {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-between;
    min-width: min(
      calc(
        calc(var(--container-max-width) - ${({ imageSize }) => imageSize}) - 6 *
          ${({ gap }) => gap}
      ),
      calc(100% - 2 * ${({ gap }) => gap})
    );

    h3 {
      text-align: left;
      white-space: nowrap;
    }
  }

  & > *:first-child {
    width: ${({ imageSize }) => imageSize};
    height: ${({ imageSize }) => imageSize};
  }
`;

CompactProject.defaultProps = {
  gap: '0.5rem',
  imageSize: '15ch',
};
