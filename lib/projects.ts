import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'content', 'projects');

export interface ProjectMeta {
  title: string;
  date: string;
  description?: string;
  slug: string;
  hidden?: boolean;
}

export interface Project extends ProjectMeta {
  content: string;
}

function parseDateMMYYYY(date: string): number {
  if (date === 'wip') return -1;
  if (!String(date).includes('-')) return parseInt(date) * 100;

  const [mm, yyyy] = date.split('-');
  return parseInt(yyyy) * 100 + parseInt(mm);
}

export function getAllProjects(): ProjectMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
      return {
        title: data.title as string,
        date: data.date as string,
        description: data.description as string | undefined,
        slug: f.replace('.mdx', ''),
        hidden: data.hidden as boolean | undefined,
      };
    })
    .sort((a, b) => {
      if (a.date === 'wip') return 1;
      if (b.date === 'wip') return -1;
      return parseDateMMYYYY(b.date) - parseDateMMYYYY(a.date);
    });
}


export function getProjectBySlug(slug: string): Project | null {
  const f = `${slug}.mdx`;
  const filePath = path.join(DIR, f);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    title: data.title as string,
    date: data.date as string,
    description: data.description as string | undefined,
    slug,
    hidden: data.hidden as boolean | undefined,
    content,
  };
}

export function getNonWipProjects(): ProjectMeta[] {
  return getAllProjects().filter((p) => p.date !== 'wip' && !p.hidden);
}
