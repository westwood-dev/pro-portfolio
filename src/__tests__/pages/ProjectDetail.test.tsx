import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProjectDetail } from '../../pages/ProjectDetail';
import { getProject } from '../../utils/markdown';

// Mock necessary dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ title: 'test-project' }),
  useNavigate: () => jest.fn()
}));

jest.mock('../../utils/markdown', () => ({
  getProject: jest.fn(),
}));

jest.mock('@iconify/react', () => ({
  Icon: () => <div data-testid="icon">Icon</div>,
}));

jest.mock('../../components/markdown/MarkdownRenderer', () => ({
  MarkdownRenderer: ({ content }: { content: string }) => (
    <div data-testid="markdown-renderer">{content}</div>
  ),
}));

jest.mock('../../components/ImagePreloader', () => ({
  ImagePreloader: ({ onComplete }: { onComplete: () => void }) => {
    onComplete();
    return null;
  },
}));

jest.mock('../../components/Loading', () => ({
  __esModule: true,
  default: () => <div data-testid="loading">Loading...</div>,
}));

jest.mock('../../components/SEO', () => ({
  SEO: () => <div data-testid="seo">SEO Component</div>,
}));

describe('ProjectDetail', () => {
  const mockProject = {
    title: 'Test Project',
    content: '# Test Content',
    description: 'Test Description'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderProjectDetail = () => {
    return render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );
  };

  it('shows loading state initially', () => {
    (getProject as jest.Mock).mockImplementation(() => new Promise(() => {}));
    renderProjectDetail();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders project content after loading', async () => {
    (getProject as jest.Mock).mockResolvedValue(mockProject);
    renderProjectDetail();

    await waitFor(() => {
      expect(screen.getByText('Test Project')).toBeInTheDocument();
      expect(screen.getByTestId('markdown-renderer')).toBeInTheDocument();
      expect(screen.getByTestId('seo')).toBeInTheDocument();
    });
  });

  it('shows error message when project fails to load', async () => {
    const errorMessage = 'Failed to load project';
    (getProject as jest.Mock).mockRejectedValue(new Error(errorMessage));
    renderProjectDetail();

    await waitFor(() => {
      expect(screen.getByText(/Failed to load project/)).toBeInTheDocument();
    });
  });

  it('includes back navigation link', async () => {
    (getProject as jest.Mock).mockResolvedValue(mockProject);
    renderProjectDetail();

    await waitFor(() => {
      const backLink = screen.getByRole('link');
      expect(backLink).toHaveAttribute('href', '/');
    });
  });
});