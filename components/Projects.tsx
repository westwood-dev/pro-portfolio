import { getProjects } from '../lib/projects';
import { ProjectList } from './ProjectList';

export function Projects() {
  const projects = getProjects();
  return <ProjectList projects={projects} />;
}
