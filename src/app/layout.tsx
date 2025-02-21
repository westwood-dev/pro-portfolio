import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import generateMetadata  from "@/components/SEO";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased theme p-8`}
      >
        {children}
      </body>
    </html>
  );
}
