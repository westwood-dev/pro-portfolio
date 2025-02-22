'use server'

import path from 'path'
import { readdir, readFile } from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { Project } from '@/types/project'

type Frontmatter = {
  title: string
  description: string
  date: string
}

export async function getProjectFiles(): Promise<Project[]> {
  const projectDir = path.join(process.cwd(), 'src/app/project')
  const files = await readdir(projectDir, { recursive: true })
  
  const mdxFiles = files
    .filter(file => typeof file === 'string' && (file.endsWith('.md') || file.endsWith('.mdx')))
    .filter(file => !file.includes('layout'))

  const projects = await Promise.all(
    mdxFiles.map(async (file) => {
      console.log('Reading file:',file)
      const filePath = path.join(projectDir, file)
      const fileContent = await readFile(filePath, 'utf8')
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true }
      })
      
      return {
        title: frontmatter.title ?? '',
        description: frontmatter.description ?? '',
        date: frontmatter.date ?? '',
        slug: file.replace(/\.mdx?$/, '')
      } as Project
    })
  )

  return projects
}