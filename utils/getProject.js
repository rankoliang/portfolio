import getPlaceholder from './getPlaceholder';

const getProject = async (project) => {
  const { imageProps } = project;

  const { imgBase64: placeholderSrc } = await getPlaceholder(imageProps.src);

  return Promise.resolve({
    ...project,
    imageProps: { ...imageProps, placeholderSrc },
  });
};

export default getProject;
