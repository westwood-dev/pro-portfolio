import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getProjects, type Project } from '../utils/markdown';
import Loading from './Loading';
import './Projects.css';

export const Projects = () => {
  const projectsCont = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData)
        setProjects(projectData);
      } catch (err) {
        setError(`Failed to load projects. ${err}`);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-colour">{error}</div>;
  }

  return (
    <div>
      <div className="projects-cont" ref={projectsCont}>
        <div className="projects-holder">
          {projects.map((project) => (
            <div key={project.slug} className="project">
              <Link
                to={`/project/${project.title}`}
                className="project-title text-colour"
              >
                {project.title.length <= 30
                  ? project.title
                  : project.title.substring(0, 29) + '...'}
              </Link>
              <div className="project-arrow">
                <Icon icon="material-symbols:arrow-forward" width="5vw" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
