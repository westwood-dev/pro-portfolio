'use client';
import { Icon } from '@iconify/react';
import { themes } from '../utils/theme';
import styles from './ThemeChanger.module.css';

interface Props {
  currentTheme: string;
  showSelector?: boolean;
  onChangeTheme: () => void;
  onSelectTheme: (theme: string) => void;
}

export function ThemeChanger({ currentTheme, showSelector, onChangeTheme, onSelectTheme }: Props) {
  return (
    <div className={styles.themeControls}>
      {!showSelector && (
        <button className={styles.themeChangeButton} onClick={onChangeTheme} aria-label="Toggle theme">
          <Icon
            icon={currentTheme === 'dark' ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'}
          />
        </button>
      )}
      {showSelector && (
        <select
          className={styles.themeSelector}
          value={currentTheme}
          onChange={(e) => onSelectTheme(e.target.value)}
          aria-label="Select theme"
        >
          {Object.keys(themes).map((name) => (
            <option key={name} value={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
