interface ITheme {
  text: string;
  bg: string;
  link: string;
}

export const themes: { [key: string]: ITheme } = {
  red: {
    text: '0,0,0',
    bg: '242,67,58',
    link: '255,255,255',
  },
  green: {
    text: '0,0,0',
    bg: '0,189,50',
    link: '17,44,178',
  },
  blue: {
    text: '0,0,0',
    bg: '4,171,217',
    link: '193,18,31',
  },
  light: {
    text: '0,0,0',
    bg: '255,255,255',
    link: '193,18,31',
  },
  dark: {
    text: '255,255,255',
    bg: '0,0,0',
    link: '193,18,31',
  },
};

class Theme {
  theme: ITheme;
  private static STORAGE_KEY = 'selected-theme';

  constructor(defaultTheme = 'red') {
    const stored = typeof window !== "undefined" ? localStorage.getItem(Theme.STORAGE_KEY) : null;
    this.theme = themes[stored || defaultTheme];
    this.set(stored || defaultTheme);
  }

  get() {
    return this.theme;
  }

  set(name: string) {
    this.theme = themes[name];
    const { text, bg, link } = themes[name];
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty('--text', text);
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--link', link);
    localStorage.setItem(Theme.STORAGE_KEY, name);
  }
}

export default Theme;