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

  return (
    <div className="markdown-content text-colour">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          grid: Grid,
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
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};