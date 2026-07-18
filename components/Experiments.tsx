import { getExperiments } from '../lib/projects';
import { ProjectList } from './ProjectList';

export function Experiments() {
  const experiments = getExperiments();
  if (experiments.length === 0) return null;
  return <ProjectList projects={experiments} />;
}
