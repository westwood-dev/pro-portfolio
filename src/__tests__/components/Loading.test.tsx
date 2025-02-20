import { render, screen } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('Loading', () => {
  it('renders loading indicator', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<Loading />);
    const loadingContainer = screen.getByTestId('loading-container');
    expect(loadingContainer).toHaveClass('loading-container');
    expect(loadingContainer.firstChild).toHaveClass('loading-text', 'text-colour');
  });
});