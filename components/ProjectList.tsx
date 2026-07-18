'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import type { ProjectMeta } from '../lib/projects';
import styles from './Projects.module.css';

export function ProjectList({ projects }: { projects: ProjectMeta[] }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const coords = useRef<{ x: number; y: number } | null>(null);
  const [activeCover, setActiveCover] = useState<string | null>(null);

  const positionImage = useCallback(() => {
    const el = imgRef.current;
    if (!el || !coords.current) return;
    const { x, y } = coords.current;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  }, []);

  // Track the cursor across the whole page so coords are known before the
  // pointer ever enters a project row (e.g. cursor held still, then scrolled).
  // Cursor stays fixed in the viewport while scrolling, so reuse the last
  // known coords to keep the hover image under it (scroll fires no mousemove).
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
      positionImage();
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', positionImage, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', positionImage);
    };
  }, [positionImage]);

  return (
    <div className={styles.projectsCont} onMouseLeave={() => setActiveCover(null)}>
      <div ref={imgRef} className={styles.hoverImage} data-visible={activeCover ? '' : undefined} aria-hidden="true">
        {activeCover && <img src={activeCover} alt="" />}
      </div>
      <div className={styles.projectsHolder}>
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className={styles.project}
            data-fade=""
            data-fade-delay={String(i * 75)}
            onMouseEnter={() => setActiveCover(project.cover ?? null)}
          >
            <Link href={`/project/${project.slug}`} className={`${styles.projectLink} text-colour`}>
              <span className={styles.projectTitle}>
                {(project.title?.length || 0) <= 30 ? project.title : project.title?.substring(0, 29) + '...'}
              </span>
              {project.subtitle && <span className={styles.projectSubtitle}>{project.subtitle}</span>}
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
