import { useState, useEffect } from 'react';
import Theme, { themes } from '../utils/theme';

export const useTheme = () => {
  const STORAGE_KEY = 'selected-theme';
  const defaultTheme = 'red';
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || defaultTheme;
    }
    return defaultTheme;
  });
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const themeInstance = new Theme(currentTheme);
    setTheme(themeInstance);
  }, []);

  const updateTheme = (newTheme: string) => {
    if (!theme) return;
    theme.set(newTheme);
    setCurrentTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return {
    theme,
    currentTheme,
    setTheme: updateTheme,
    themes,
  };
};