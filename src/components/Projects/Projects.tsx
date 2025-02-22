'use client'

import { getProjectFiles } from '@/utils/getProjects'
import type { Project } from '@/types/project'

async function Projects() {
  const projects: Project[] = await getProjectFiles()
  
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.slug} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span>{project.date}</span>
        </div>
      ))}
    </div>
  )
}

export { Projects }