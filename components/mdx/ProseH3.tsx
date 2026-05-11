import styles from './ProseH3.module.css';

export function ProseH3({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h3 id={id} className={styles.h3}>{children}</h3>;
}
