import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeImgSizeDecoded from '../../../lib/rehype-img-size-decoded';
import { getAllProjects, getProjectByTitle } from '../../../lib/projects';
import { mdxComponents } from '../../../components/mdx';
import styles from './page.module.css';

interface Props {
  params: Promise<{ title: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ title: p.title }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const project = getProjectByTitle(decodedTitle);
  if (!project) return {};
  return {
    title: `${project.title} | William Westwood`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const project = getProjectByTitle(decodedTitle);

  if (!project) notFound();

  const words = decodedTitle.split(' ');
  const longestWordLen = Math.max(...words.map((w) => w.length));
  const fontSize = `${longestWordLen * 1.12}vw`;
  const lineHeight = `${longestWordLen * 1}vw`;

  return (
    <div className={styles.container}>
      <div className={`title text-colour ${styles.projectTitle}`} style={{ fontSize, lineHeight }}>
        <Link href="/">
          <Icon
            icon="material-symbols:arrow-forward"
            className="text-colour"
            style={{ transform: 'rotate(180deg)', marginBottom: '-1vw' }}
          />
        </Link>
        {decodedTitle}
      </div>
      {(project!.description || project!.date) && (
        <div className={`${styles.metaStrip} text-colour`}>
          {project!.description && <span>{project!.description}</span>}
          {project!.date && project!.date !== 'wip' && (
            <span className={styles.metaDate}>{project!.date}</span>
          )}
        </div>
      )}
      <div className={styles.contentWrapper}>
        <MDXRemote
          source={project!.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypeImgSizeDecoded, { dir: 'public' }]],
            },
          }}
        />
      </div>
    </div>
  );
}
