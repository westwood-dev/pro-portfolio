import { ReactNode } from 'react';
import './MarkdownComponents.css';

interface GridProps {
  children: ReactNode;
  cols?: string;
  rows?: string;
}

export const Grid = ({ children, cols, rows }: GridProps) => {

  if (Array.isArray(children)) {
    const filtered = children.filter((child) => {
      if (typeof child === 'string') {
        return child !== '\n';
      }
      return true;
    }).map((child, index) => {
      if (typeof child === 'object' && 'type' in child && child.type === 'p') {
        const innerChild = child.props.children;
        // Handle case where innerChild is an array (multiple elements in paragraph)
        if (Array.isArray(innerChild)) {
          return innerChild.map((ic, childIndex) => {
            if (typeof ic === 'object' && ('key' in ic)) {
              return { ...ic, key: `grid-item-${index}-${childIndex}` };
            }
            return ic;
          });
        }
        // Handle single child case
        if (typeof innerChild === 'object' && ('key' in innerChild)) {
          return { ...innerChild, key: `grid-item-${index}` };
        }
        return innerChild;
      }
      // Add key to non-paragraph elements if they don't have one
      if (typeof child === 'object' && !('key' in child)) {
        return { ...child, key: `grid-item-${index}` };
      }
      return child;
    });
    // Flatten the array since we might have arrays from mapped innerChild
    children = filtered.flat();
  }

  return (
    <div 
      className="md-grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`
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