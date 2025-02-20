import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home';

// Mock components to isolate Home component testing
jest.mock('../../components/Projects', () => ({
  __esModule: true,
  default: () => <div data-testid="projects-component">Projects Mock</div>,
}));

jest.mock('../../components/Contact', () => ({
  __esModule: true,
  default: () => <div data-testid="contact-component">Contact Mock</div>,
}));

jest.mock('../../components/SEO', () => ({
  SEO: () => <div data-testid="seo-component">SEO Mock</div>,
}));

describe('Home', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  it('renders the main heading', () => {
    renderHome();
    // Use a more flexible selector since the text might be split across elements
    expect(screen.getByText(/William/i)).toBeInTheDocument();
    expect(screen.getByText(/Westwood/i)).toBeInTheDocument();
  });

  it('renders client links with correct hrefs', () => {
    renderHome();
    expect(screen.getByText('Somerset House Studios')).toHaveAttribute(
      'href',
      'https://www.somersethouse.org.uk/somerset-house-studios'
    );
    expect(screen.getByText('Creative Computing Institute')).toHaveAttribute(
      'href',
      'https://www.arts.ac.uk/creative-computing-institute'
    );
    expect(screen.getByText('Don\'t Drink The Water')).toHaveAttribute(
      'href',
      'https://dontdrinkthewater.shop'
    );
  });

  it('renders all major sections', () => {
    renderHome();
    expect(screen.getByText('Projects.')).toBeInTheDocument();
    expect(screen.getByText('Contact.')).toBeInTheDocument();
    expect(screen.getByTestId('projects-component')).toBeInTheDocument();
    expect(screen.getByTestId('contact-component')).toBeInTheDocument();
    expect(screen.getByTestId('seo-component')).toBeInTheDocument();
  });
});