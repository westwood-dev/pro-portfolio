import Link from 'next/link';
import { Icon } from '@iconify/react';
import { getNonWipProjects } from '../lib/projects';
import styles from './Projects.module.css';

export function Projects() {
  const projects = getNonWipProjects();

  return (
    <div className={styles.projectsCont}>
      <div className={styles.projectsHolder}>
        {projects.map((project, i) => (
          <div key={project.slug} className={styles.project} data-fade="" data-fade-delay={String(i * 75)}>
            <Link href={`/project/${project.slug}`} className={`${styles.projectTitle} text-colour`}>
              {(project.title?.length || 0) <= 30
                ? project.title
                : project.title?.substring(0, 29) + '...'}
            </Link>
            <div className={styles.projectArrow} aria-hidden="true">
              <Icon icon="material-symbols:arrow-forward" style={{ fontSize: '5vw' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
