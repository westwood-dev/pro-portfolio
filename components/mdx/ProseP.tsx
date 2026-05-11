import styles from './ProseP.module.css';

export function ProseP({ children }: { children: React.ReactNode }) {
  return <p className={styles.p}>{children}</p>;
}
