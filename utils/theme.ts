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

  constructor(defaultTheme = 'light') {
    if (import.meta.client) {
      const stored = localStorage.getItem(Theme.STORAGE_KEY);
      this.theme = themes[stored || defaultTheme];
      this.set(stored || defaultTheme);
    } else {
      this.theme = themes[defaultTheme];
    }
  }

  get() {
    return this.theme;
  }

  set(name: string) {
    if (!import.meta.client) return;

    this.theme = themes[name];
    const { text, bg, link } = themes[name];
    document.documentElement.style.setProperty('--text', text);
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--link', link);
    localStorage.setItem(Theme.STORAGE_KEY, name);

    console.log(document.querySelector("link[rel~='icon']")?.getAttribute("href"));

    document.querySelector("link[rel~='icon']")?.setAttribute("href", `data:image/svg+xml,
        <svg width='1000' height='1000' viewBox='0 0 1000 1000' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='1000' height='1000' rx='80' fill='rgb(${themes[name].bg})'/>
        <path d='M339.31 813.485L108.721 212.891H221.166L452.135 813.485H339.31ZM667.528 813.485L436.939 212.891H549.385L780.354 813.485H667.528ZM869.626 182.5V237.583L858.609 389.156H789.471L789.851 243.281V182.5H869.626Z' fill='rgb(${themes[name].text})'/>
        </svg>`
    );

    console.log("Theme set to", name);

  }
}

export default Theme;
