import styles from './ProseP.module.css';

export function ProseP({ children }: { children: React.ReactNode }) {
  return <div data-fade="" className={styles.p}>{children}</div>;
}
