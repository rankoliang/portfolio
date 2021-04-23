import getProject from './getProject';
import projectData from '../content/projects';

const getProjects = async () => {
  return Promise.all(projectData.map((project) => getProject(project)));
};

export default getProjects;
