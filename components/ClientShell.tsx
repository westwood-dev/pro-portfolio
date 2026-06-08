'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTheme } from '../hooks/useTheme';
import { ThemeChanger } from './ThemeChanger';

export function ClientShell({ children }: { children: React.ReactNode }) {
  const { currentTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute('data-fade-delay') || 0);
            setTimeout(() => {
              entry.target.setAttribute('data-visible', '');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('[data-fade]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

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
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
