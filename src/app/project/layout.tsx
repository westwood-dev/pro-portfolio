export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`antialiased theme p-8`}
      >
        {children}
        </div>
  );
}