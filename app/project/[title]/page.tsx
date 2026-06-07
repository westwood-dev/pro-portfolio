import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeImgSizeDecoded from '../../../lib/rehype-img-size-decoded';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { getAllProjects, getProjectBySlug } from '../../../lib/projects';
import { mdxComponents } from '../../../components/mdx';
import styles from './page.module.css';

interface Props {
  params: Promise<{ title: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ title: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | William Westwood`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { title: slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const words = project.title.split(' ');
  const longestWordLen = Math.max(...words.map((w) => w.length));
  const effectiveLen = Math.max(longestWordLen, 14);
  const fontSize = `calc(((100vw - 4rem) / ${effectiveLen})* 1.5)`;
  const displayTitle = project.title.replace(/-/g, '‑');

  return (
    <div className={styles.container}>
      <h1 className={`title text-colour ${styles.projectTitle}`} style={{ fontSize, lineHeight: fontSize }}>
        <Link href="/" aria-label="Back to home">
          <Icon
            icon="material-symbols:arrow-forward"
            className="text-colour"
            style={{ transform: 'rotate(180deg)', marginBottom: '-1vw' }}
            aria-hidden="true"
          />
        </Link>
        {displayTitle}
      </h1>
      {(project!.description || project!.date) && (
        <div className={`${styles.metaStrip} text-colour`}>
          {project!.description && <span>{project!.description}</span>}
          {project!.date && project!.date !== 'wip' && (
            <span className={styles.metaDate}>{project!.date}</span>
          )}
        </div>
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.mdxContent}>
          <MDXRemote
            source={project!.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [rehypeImgSizeDecoded, { dir: 'public' }],
                  [rehypePrettyCode, { theme: { light: 'github-light', dark: 'github-dark-dimmed' }, keepBackground: false }],
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
