import Link from 'next/link';
import { Icon } from '@iconify/react';
import { getNonWipProjects } from '../lib/projects';
import styles from './Projects.module.css';

export function Projects() {
  const projects = getNonWipProjects();

  return (
    <div className={styles.projectsCont}>
      <div className={styles.projectsHolder}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.project}>
            <Link href={`/project/${encodeURIComponent(project.title)}`} className={`${styles.projectTitle} text-colour`}>
              {(project.title?.length || 0) <= 30
                ? project.title
                : project.title?.substring(0, 29) + '...'}
            </Link>
            <div className={styles.projectArrow}>
              <Icon icon="material-symbols:arrow-forward" style={{ fontSize: '5vw' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
