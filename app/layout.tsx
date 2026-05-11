import type { Metadata } from 'next';
import '../styles/globals.css';
import { ClientShell } from '../components/ClientShell';

export const metadata: Metadata = {
  title: 'William Westwood',
  description: 'William Westwood is a developer and designer based in London, UK.',
  metadataBase: new URL('https://williamwestwood.com'),
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
