import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeChanger } from '../../components/ThemeChanger';
import { themes } from '../../utils/theme';

// Mock Icon component
jest.mock('@iconify/react', () => ({
  Icon: ({ onClick }: { onClick?: () => void }) => (
    <div data-testid="theme-icon" onClick={onClick}>Theme Icon</div>
  ),
}));

describe('ThemeChanger', () => {
  const mockOnChangeTheme = jest.fn();
  const mockOnSelectTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders theme icon button when showSelector is false', () => {
    render(
      <ThemeChanger
        currentTheme="dark"
        showSelector={false}
        onChangeTheme={mockOnChangeTheme}
        onSelectTheme={mockOnSelectTheme}
      />
    );

    const themeIcon = screen.getByTestId('theme-icon');
    expect(themeIcon).toBeInTheDocument();

    themeIcon.click();
    expect(mockOnChangeTheme).toHaveBeenCalledTimes(1);
  });

  it('renders theme selector dropdown when showSelector is true', () => {
    render(
      <ThemeChanger
        currentTheme="red"
        showSelector={true}
        onChangeTheme={mockOnChangeTheme}
        onSelectTheme={mockOnSelectTheme}
      />
    );

    const selector = screen.getByRole('combobox');
    expect(selector).toBeInTheDocument();
    expect(selector).toHaveValue('red');

    // Check if all theme options are present
    Object.keys(themes).forEach(theme => {
      const option = screen.getByRole('option', {
        name: theme.charAt(0).toUpperCase() + theme.slice(1)
      });
      expect(option).toBeInTheDocument();
    });
  });

  it('calls onSelectTheme when a new theme is selected', () => {
    render(
      <ThemeChanger
        currentTheme="red"
        showSelector={true}
        onChangeTheme={mockOnChangeTheme}
        onSelectTheme={mockOnSelectTheme}
      />
    );

    const selector = screen.getByRole('combobox');
    fireEvent.change(selector, { target: { value: 'dark' } });
    
    expect(mockOnSelectTheme).toHaveBeenCalledWith('dark');
  });
});