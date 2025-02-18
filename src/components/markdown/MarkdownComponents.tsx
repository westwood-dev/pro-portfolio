import { ReactNode } from 'react';
import './MarkdownComponents.css';

interface GridProps {
  children: ReactNode;
  col?: string;
  row?: string;
}

export const Grid = ({ children }: GridProps) => {
  return <div className="md-grid">{children}</div>;
};

export const Spacer = () => {
  return <div className="md-spacer"></div>;
};

export default { Grid, Spacer };