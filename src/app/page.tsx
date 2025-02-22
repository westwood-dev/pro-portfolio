'use client';

import { Icon } from '@iconify/react';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';
import ThemeChanger from '@/components/ThemeChanger';
import Section from '@/components/Section';
// import './Home.css';

export default function Home() {
  const { currentTheme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Add theme-ready class once theme is initialized
    if (currentTheme) {
      setIsThemeReady(true);
    }
  }, [currentTheme]);

  const handleThemeChange = () => {
    if (!currentTheme) return;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleThemeSelect = (newTheme: string) => {
    if (!newTheme) return;
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col">
      <div className={`pb-4 ${isThemeReady ? 'theme-ready' : 'theme-loading'}`}>
        <h1 className="title" style={{ overflow: 'hidden' }}>
          William
          <br />
          Westwood
        </h1>
        <div
          className="flex flex-col w-full mt-8 p-0"
          style={{
            border: 'solid rgb(var(--text))',
            borderWidth: 'var(--border-width) 0',
            transition: 'border-color 0.5s',
          }}
        >
          <span className="py-2 block td-none text-[1.5rem]">
            Web design, UI/UX, Full-stack Development, Front-end Development and
            3D Design.
          </span>
        </div>
      </div>
      <Section title="Projects.">
        <Projects />
      </Section>
      <Section title="Contact.">
        <Contact />
      </Section>
      <div className="flex flex-row w-full justify-between items-center">
        <ThemeChanger
          currentTheme={currentTheme || 'red'}
          showSelector={true}
          onChangeTheme={handleThemeChange}
          onSelectTheme={handleThemeSelect}
        />
        <span className="text-colour">William Westwood | 2025</span>
        <div>
          <a
            href="https://design.williamwestwood.com"
            className="text-colour no-underline hover:underline"
          >
            design work
            <Icon
              icon="material-symbols:arrow-outward"
              width="1rem"
              className="text-colour inline mt-[-.5rem] text-[1rem]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
