import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../hooks/useTheme';

describe('useTheme', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
    jest.clearAllMocks();
  });

  it('initializes with default theme if none in localStorage', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() => useTheme());
    
    expect(result.current.currentTheme).toBe('red');
    expect(result.current.theme).toBeTruthy();
  });

  it('initializes with theme from localStorage if available', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    const { result } = renderHook(() => useTheme());
    
    expect(result.current.currentTheme).toBe('dark');
    expect(result.current.theme).toBeTruthy();
  });

  it('updates theme when setTheme is called', () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.setTheme('dark');
    });
    
    expect(result.current.currentTheme).toBe('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('selected-theme', 'dark');
  });

  it('exposes available themes', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.themes).toBeDefined();
  });
});