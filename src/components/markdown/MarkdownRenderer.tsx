import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Icon } from '@iconify/react';
import { Grid, Spacer } from './MarkdownComponents';
import Image from './Image';
import Video from './Video';
import Loading from '../Loading';
import './MarkdownRenderer.css';
import { ReactNode } from 'react';

interface MarkdownRendererProps {
  content: string;
  isLoading?: boolean;
}

export const MarkdownRenderer = ({ content, isLoading }: MarkdownRendererProps) => {
  if (isLoading) {
    return <Loading />;
  }

  const customComponents = {
    grid: Grid,
    spacer: Spacer,
    img: Image,
    video: Video,
    h2: ({ children }: {children: ReactNode}) => <h2 className="text-colour">{children}</h2>,
    h3: ({ children }: {children: ReactNode}) => <h3 className="text-colour">{children}</h3>,
    h4: ({ children }: {children: ReactNode}) => <h4 className="text-colour">{children}</h4>,
    h5: ({ children }: {children: ReactNode}) => <h5 className="text-colour">{children}</h5>,
    a: ({ href, children, ...props }: React.ComponentPropsWithRef<'a'>) => (
      <a 
        {...props}
        href={href || '#'} 
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
  };

  // Replace custom markdown syntax with custom components
  content = content.replace(/(?<=(::Grid[\dx]+)([^:].+[\n]+)+):{2}(?=\n)/g, '</Grid>')
  content = content.replace(/::Grid(?<cols>\d)x(?<rows>\d)/g, '<Grid cols="$<cols>" rows="$<rows>">');
  content = content.replace(/::Spacer/g, '<br />');
  // console.log(content);

  return (
    <div className="markdown-content text-colour">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={customComponents as Components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
