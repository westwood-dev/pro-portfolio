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
  
  const [theme, setTheme] = useState<Theme | null>(() => {
    // Initialize theme immediately instead of waiting for useEffect
    return new Theme(currentTheme);
  });

  useEffect(() => {
    // Update theme when currentTheme changes
    const themeInstance = new Theme(currentTheme);
    setTheme(themeInstance);
  }, [currentTheme]); // Added currentTheme dependency

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