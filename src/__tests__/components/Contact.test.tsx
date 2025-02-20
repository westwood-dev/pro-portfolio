import { render, screen } from '@testing-library/react';
import { Contact } from '../../components/Contact';

// Mock IconifyIcon component
jest.mock('@iconify/react', () => ({
  Icon: () => <div data-testid="icon" />,
}));

describe('Contact', () => {
  it('renders all contact links with correct hrefs', () => {
    render(<Contact />);
    
    // Email link
    const emailLink = screen.getByText('hello@williamwestwood.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@williamwestwood.com');
    
    // GitHub link
    const githubLink = screen.getByText('@westwood-dev').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/westwood-dev');
    
    // LinkedIn link
    const linkedinLink = screen.getByText('William Westwood').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/will-westwood/');
    
    // CV link
    const cvLink = screen.getByText('CV').closest('a');
    expect(cvLink).toHaveAttribute('href', '/William-Westwood-CV.pdf');
  });

  it('renders all contact labels', () => {
    render(<Contact />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Linkedin')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
  });

  it('renders all icons', () => {
    render(<Contact />);
    const icons = screen.getAllByTestId('icon');
    expect(icons).toHaveLength(4);
  });
});