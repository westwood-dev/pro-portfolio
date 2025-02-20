import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Projects } from '../../components/Projects';
import { getProjects } from '../../utils/markdown';

// Mock dependencies
jest.mock('@iconify/react', () => ({
  Icon: () => <div data-testid="icon" />,
}));

jest.mock('../../utils/markdown', () => ({
  getProjects: jest.fn(),
}));

jest.mock('../../components/Loading', () => ({
  __esModule: true,
  default: () => <div data-testid="loading">Loading...</div>,
}));

describe('Projects', () => {
  const mockProjects = [
    { title: 'Project 1', slug: 'project-1' },
    { title: 'Project 2', slug: 'project-2' },
    { title: 'A Very Long Project Title That Should Be Truncated', slug: 'long-project' },
  ];

  const renderProjects = () => {
    return render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state initially', () => {
    (getProjects as jest.Mock).mockImplementation(() => new Promise(() => {}));
    renderProjects();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders projects after loading', async () => {
    (getProjects as jest.Mock).mockResolvedValue(mockProjects);
    renderProjects();

    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.getByText('Project 2')).toBeInTheDocument();
    });
  });

  it('truncates long project titles', async () => {
    (getProjects as jest.Mock).mockResolvedValue(mockProjects);
    renderProjects();

    await waitFor(() => {
      expect(screen.getByText('A Very Long Project Title Tha...')).toBeInTheDocument();
    });
  });

  it('shows error message when projects fail to load', async () => {
    const errorMessage = 'Failed to load projects';
    (getProjects as jest.Mock).mockRejectedValue(new Error(errorMessage));
    renderProjects();

    await waitFor(() => {
      expect(screen.getByText(/Failed to load projects/)).toBeInTheDocument();
    });
  });
});