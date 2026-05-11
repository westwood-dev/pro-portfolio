import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'content', 'projects');

export interface ProjectMeta {
  title: string;
  date: string;
  description?: string;
  slug: string;
}

export interface Project extends ProjectMeta {
  content: string;
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
      };
    });
}

export function getProjectByTitle(title: string): Project | null {
  for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(DIR, f), 'utf8');
    const { data, content } = matter(raw);
    if (data.title === title) {
      return {
        title: data.title as string,
        date: data.date as string,
        description: data.description as string | undefined,
        slug: f.replace('.mdx', ''),
        content,
      };
    }
  }
  return null;
}

export function getNonWipProjects(): ProjectMeta[] {
  return getAllProjects().filter((p) => p.date !== 'wip');
}
