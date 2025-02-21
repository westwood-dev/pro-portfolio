import '@/app/globals.css';

interface gridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: gridProps) => {
  return (
    <div
      className="w-full"
      style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(256px, 1fr))',
        gridAutoFlow: 'dense',
      }}
    >
      {children}
    </div>
  );
};
