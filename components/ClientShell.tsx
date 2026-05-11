'use client';
import { Icon } from '@iconify/react';
import { useTheme } from '../hooks/useTheme';
import { ThemeChanger } from './ThemeChanger';

export function ClientShell({ children }: { children: React.ReactNode }) {
  const { currentTheme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-colour text-colour site-cont">
      {children}
      <div className="footer-cont">
        <ThemeChanger
          currentTheme={currentTheme}
          showSelector={true}
          onChangeTheme={handleThemeChange}
          onSelectTheme={setTheme}
        />
        <span className="text-colour">William Westwood | {new Date().getFullYear()}</span>
        <div>
          <a href="https://design.williamwestwood.com" className="text-colour">
            design work
          </a>
          <Icon
            icon="material-symbols:arrow-outward"
            className="text-colour"
            style={{ fontSize: '1rem' }}
          />
        </div>
      </div>
    </div>
  );
}
