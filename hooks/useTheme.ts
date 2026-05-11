'use client';
import { useState, useEffect } from 'react';
import Theme, { themes } from '../utils/theme';

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [themeInstance, setThemeInstance] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('selected-theme') || 'light';
    const instance = new Theme('light');
    instance.set(stored);
    setThemeInstance(instance);
    setCurrentTheme(stored);
  }, []);

  const setTheme = (name: string) => {
    themeInstance?.set(name);
    setCurrentTheme(name);
  };

  return { currentTheme, setTheme, themes };
}
