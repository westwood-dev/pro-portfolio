import type { Metadata } from 'next';
import { Barlow, Libre_Franklin } from 'next/font/google';
import '../styles/globals.css';
import { ClientShell } from '../components/ClientShell';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'William Westwood',
  description: 'William Westwood is a developer and designer based in London, UK.',
  metadataBase: new URL('https://williamwestwood.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${libreFranklin.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var colors={red:['242,67,58','10,3,2'],green:['0,189,50','2,8,3'],blue:['4,171,217','1,4,8'],light:['253,251,249','14,12,11'],dark:['11,10,9','245,243,241']};var t=localStorage.getItem('selected-theme')||'light';var c=colors[t]||colors.light;document.documentElement.setAttribute('data-color-scheme',t==='dark'?'dark':'light');var svg="<svg width='1000' height='1000' viewBox='0 0 1000 1000' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='1000' height='1000' rx='80' fill='rgb("+c[0]+")'/>"+\"<path d='M339.31 813.485L108.721 212.891H221.166L452.135 813.485H339.31ZM667.528 813.485L436.939 212.891H549.385L780.354 813.485H667.528ZM869.626 182.5V237.583L858.609 389.156H789.471L789.851 243.281V182.5H869.626Z' fill='rgb(\"+c[1]+\")'/>\"+'</svg>';var l=document.createElement('link');l.id='theme-favicon';l.rel='icon';l.type='image/svg+xml';l.href='data:image/svg+xml,'+encodeURIComponent(svg);document.head.appendChild(l);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
