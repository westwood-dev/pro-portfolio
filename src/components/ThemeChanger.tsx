import { Icon } from '@iconify/react';
import { themes } from '../utils/theme';

interface ThemeChangerProps {
  currentTheme: string;
  showSelector?: boolean;
  onChangeTheme: () => void;
  onSelectTheme: (theme: string) => void;
}

export const ThemeChanger = ({ currentTheme, showSelector, onChangeTheme, onSelectTheme }: ThemeChangerProps) => {
  return (
    <div className="theme-controls">
      {!showSelector ? (
        <div className="theme-change-button">
          <Icon
            id="themeIcon"
            className="textColour"
            icon={currentTheme === 'dark' ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'}
            onClick={onChangeTheme}
          />
        </div>
      ) : (
        <select
          className="theme-selector"
          value={currentTheme}
          onChange={(e) => onSelectTheme(e.target.value)}
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
};

export default ThemeChanger;