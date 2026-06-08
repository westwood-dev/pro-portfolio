import styles from './Grid.module.css';

export function Grid({ children }: { children: React.ReactNode }) {
  return <div data-fade="" className={styles.grid}>{children}</div>;
}
