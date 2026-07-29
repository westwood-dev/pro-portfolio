interface ITheme {
  text: string;
  bg: string;
  link: string;
}

export const themes: { [key: string]: ITheme } = {
  red: {
    text: '10,3,2',
    bg: '242,67,58',
    link: '15,20,66',
  },
  green: {
    text: '2,8,3',
    bg: '0,189,50',
    link: '8,18,105',
  },
  blue: {
    text: '1,4,8',
    bg: '4,171,217',
    link: '95,8,14',
  },
  light: {
    text: '14,12,11',
    bg: '253,251,249',
    link: '185,14,26',
  },
  dark: {
    text: '245,243,241',
    bg: '11,10,9',
    link: '214,80,72',
  },
};

class Theme {
  theme: ITheme;
  private static STORAGE_KEY = 'selected-theme';

  constructor(defaultTheme = 'light') {
    if (typeof window !== 'undefined') {
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
    if (typeof window === 'undefined') return;

    this.theme = themes[name];
    const { text, bg, link } = themes[name];
    document.documentElement.style.setProperty('--text', text);
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--link', link);
    document.documentElement.setAttribute('data-color-scheme', name === 'dark' ? 'dark' : 'light');
    localStorage.setItem(Theme.STORAGE_KEY, name);

    let faviconLink = document.getElementById('theme-favicon') as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.id = 'theme-favicon';
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/svg+xml';
      document.head.appendChild(faviconLink);
    }
    const svg = `<svg width='1000' height='1000' viewBox='0 0 1000 1000' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='1000' height='1000' rx='80' fill='rgb(${themes[name].bg})'/><path d='M339.31 813.485L108.721 212.891H221.166L452.135 813.485H339.31ZM667.528 813.485L436.939 212.891H549.385L780.354 813.485H667.528ZM869.626 182.5V237.583L858.609 389.156H789.471L789.851 243.281V182.5H869.626Z' fill='rgb(${themes[name].text})'/></svg>`;
    faviconLink.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
  }
}

export default Theme;
