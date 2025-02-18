import { ReactNode } from 'react';
import './MarkdownComponents.css';

interface GridProps {
  children: ReactNode;
  col?: string;
  row?: string;
}

export const Grid = ({ children, col = '1', row = '1' }: GridProps) => {
  return (
    <div 
      className="md-grid"
      style={{
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, auto)`
      }}
    >
      {children}
    </div>
  );
};

export const Spacer = () => {
  return <div className="md-spacer"></div>;
};

export default { Grid, Spacer };