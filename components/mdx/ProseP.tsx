import styles from './ProseP.module.css';

export function ProseP({ children }: { children: React.ReactNode }) {
  return <div className={styles.p}>{children}</div>;
}
