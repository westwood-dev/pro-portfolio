import { render, screen } from '@testing-library/react';
import MarkdownRenderer from '../../../components/markdown/MarkdownRenderer';

// Mock components
jest.mock('@iconify/react', () => ({
  Icon: () => <div data-testid="icon">Icon</div>,
}));

jest.mock('../../../components/Loading', () => ({
  __esModule: true,
  default: () => <div data-testid="loading">Loading...</div>,
}));

jest.mock('../../../components/markdown/Image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="markdown-image" src={src} alt={alt} />
  ),
}));

jest.mock('../../../components/markdown/Video', () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => (
    <video data-testid="markdown-video" src={src} />
  ),
}));

describe('MarkdownRenderer', () => {
  it('shows loading state when isLoading is true', () => {
    render(<MarkdownRenderer content="" isLoading={true} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders markdown content correctly', () => {
    const content = `
# Heading 1
## Heading 2
[Link](https://example.com)
![Image](test.jpg)
\`\`\`
code block
\`\`\`
    `;
    
    render(<MarkdownRenderer content={content} isLoading={false} />);
    
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Link')).toBeInTheDocument();
    expect(screen.getByTestId('markdown-image')).toBeInTheDocument();
    expect(screen.getByText('code block')).toBeInTheDocument();
  });

  it('renders external links with arrow icon', () => {
    const content = '[External Link](https://example.com)';
    render(<MarkdownRenderer content={content} isLoading={false} />);
    
    const link = screen.getByText('External Link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders internal links without arrow icon', () => {
    const content = '[Internal Link](/some-page)';
    render(<MarkdownRenderer content={content} isLoading={false} />);
    
    const link = screen.getByText('Internal Link');
    expect(link).toHaveAttribute('href', '/some-page');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders custom grid components', () => {
    const content = '::Grid2x2\nContent\n::';
    render(<MarkdownRenderer content={content} isLoading={false} />);
    
    const grid = screen.getByText('Content');
    expect(grid).toBeInTheDocument();
  });
});