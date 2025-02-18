import matter from 'gray-matter';

export interface ProjectMeta {
  title: string;
  description?: string;
  date?: string;
}

export interface Project extends ProjectMeta {
  content: string;
  slug: string;
}

// Import all markdown files from the content directory
const importMarkdown = async () => {
  const projectModules = import.meta.glob('../../content/projects/*.md', { eager: true, query: '?raw' });
  const projects: Record<string, string> = {};
  
  for (const path in projectModules) {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    projects[slug] = projectModules[path] as string;
  }
  
  return projects;
};

// Function to get all projects
export async function getProjects(): Promise<Project[]> {
  const projectFiles = await importMarkdown();
  
  const projects = Object.entries(projectFiles).map(([slug, content]) => {
    const { data, content: markdownContent } = parseMarkdown(content);
    return {
      ...data,
      content: markdownContent,
      slug,
    };
  });
  
  return projects.sort((a, b) => {
    if (a.date === 'wip') return -1;
    if (b.date === 'wip') return 1;
    return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
  });
}

// Function to get a single project by slug or title
export async function getProject(identifier: string): Promise<Project | null> {
  const normalizedIdentifier = identifier.toLowerCase().replace(/\s+/g, '-');
  const projectFiles = await importMarkdown();
  
  // Try direct slug lookup first
  let content = projectFiles[normalizedIdentifier];
  
  // If not found, try to find by title
  if (!content) {
    const allProjects = await getProjects();
    const projectByTitle = allProjects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === normalizedIdentifier
    );
    if (projectByTitle) {
      return projectByTitle;
    }
    return null;
  }
  
  const { data, content: markdownContent } = parseMarkdown(content);
  return {
    ...data,
    content: markdownContent,
    slug: normalizedIdentifier,
  };
}

// Parse markdown content with frontmatter
export function parseMarkdown(content: string): { data: ProjectMeta; content: string } {
  const { data, content: markdownContent } = matter(content);
  return {
    data: data as ProjectMeta,
    content: markdownContent,
  };
}