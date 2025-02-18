import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Icon } from '@iconify/react';
import { Grid, Spacer } from './MarkdownComponents';
import Image from './Image';
import Video from './Video';
import Loading from '../Loading';
import './MarkdownRenderer.css';

interface MarkdownRendererProps {
  content: string;
  isLoading?: boolean;
}

export const MarkdownRenderer = ({ content, isLoading }: MarkdownRendererProps) => {
  if (isLoading) {
    return <Loading />;
  }

  const customComponents = {
    // Grid: Grid,
    spacer: Spacer,
    img: Image,
    video: Video,
    h2: ({ children }) => <h2 className="text-colour">{children}</h2>,
    h3: ({ children }) => <h3 className="text-colour">{children}</h3>,
    h4: ({ children }) => <h4 className="text-colour">{children}</h4>,
    h5: ({ children }) => <h5 className="text-colour">{children}</h5>,
    a: ({ href, children }) => (
      <a 
        href={href} 
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-colour"
      >
        {children}
        {href?.startsWith('http') && (
          <Icon icon="material-symbols:arrow-outward" width="0.75rem" />
        )}
      </a>
    ),
    grid: ({ children, cols, rows }) => (
      <div 
        className="md-grid customGridElement"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, auto)`
        }}
      >
        {children}
      </div>
    )
  };

  // console.log(content);
  // console.log(content.replace(/::Grid(\d)x(\d)/g, '<Grid rows="$1" cols="$2">').replace(/(?<=(::Grid[\dx]+)([^:].+[\n]+)+):{2}/g, '</Grid>'))

  // Replace custom markdown syntax with custom components
  content = content.replace(/(?<=(::Grid[\dx]+)([^:].+[\n]+)+):{2}(?=\n)/g, '</Grid>')
  content = content.replace(/::Grid(?<cols>\d)x(?<rows>\d)/g, '<Grid cols="$<cols>" rows="$<rows>">');
  content = content.replace(/::Spacer/g, '<br />');
  //console.log(content);

  return (
    <div className="markdown-content text-colour">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={customComponents}
      >
        {/* {content.replace(/::Grid(\d)x(\d)/g, '<Grid rows="$1" cols="$2">').replace(/(?<=::Grid.*)::/g, '</Grid>')} */ content}
      </ReactMarkdown>
    </div>
  );
};
