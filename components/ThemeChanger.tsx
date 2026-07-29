'use client';
import { themes } from '../utils/theme';
import styles from './ThemeChanger.module.css';

interface Props {
  currentTheme: string;
  onSelectTheme: (theme: string) => void;
}

export function ThemeChanger({ currentTheme, onSelectTheme }: Props) {
  return (
    <div className={styles.themeControls}>
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
    </div>
  );
}
