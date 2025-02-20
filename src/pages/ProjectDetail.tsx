import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { getProject, type Project } from '../utils/markdown';
import  MarkdownRenderer  from '../components/markdown/MarkdownRenderer';
import { ImagePreloader } from '../components/ImagePreloader/ImagePreloader';
import Loading from '../components/Loading/Loading';
import { SEO } from '../components/SEO/SEO';
import './ProjectDetail.css';

export const ProjectDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract image URLs from markdown content
  const extractImageUrls = (content: string): string[] => {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const matches = [...content.matchAll(imageRegex)];
    return matches.map(match => match[1]);
  };

  const handleImagesLoaded = useCallback(() => {
    setImagesLoading(false);
  }, []);

  useEffect(() => {
    const loadProject = async () => {
      if (!title) {
        setError('No project title provided');
        setLoading(false);
        return;
      }
      
      try {
        const projectData = await getProject(title);
        if (projectData) {
          setProject(projectData);
          setError(null);
        } else {
          setError('Project not found');
          setTimeout(() => navigate('/'), 3000);
        }
      } catch (err) {
        setError('Failed to load project');
      } finally {
        setLoading(false);
      }
    };
    
    loadProject();
  }, [title, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="project-detail">
        <h2 className="text-colour">{error}</h2>
        <Link to="/" className="text-colour">Return Home</Link>
      </div>
    );
  }

  const imageUrls = project ? extractImageUrls(project.content) : [];

  return (
    <div className="project-detail">
      <ImagePreloader 
        imageUrls={imageUrls} 
        onComplete={handleImagesLoaded} 
      />
      <SEO 
        title={`${project?.title || 'Project'} - William Westwood`}
        description={project?.description || 'Project details for William Westwood\'s portfolio'}
      />
      <div className="title text-colour" style={{
        fontSize: `${Math.max(...String(title || '').split(' ').map(word => word.length)) * 1.12}vw`,
        lineHeight: `${Math.max(...String(title || '').split(' ').map(word => word.length)) * 1}vw`
      }}>
        <Link to="/">
          <Icon
            icon="material-symbols:arrow-forward"
            className="text-colour"
            style={{ transform: 'rotate(180deg)', marginBottom: '-1vw' }}
          />
        </Link>
        {project?.title || title}
      </div>
      <div className="project-content-renderer">
        <MarkdownRenderer 
          content={project?.content || ''} 
          isLoading={imagesLoading}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;