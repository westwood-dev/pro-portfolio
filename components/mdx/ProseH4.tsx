import styles from './ProseH4.module.css';

export function ProseH4({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h4 id={id} className={styles.h4}>{children}</h4>;
}
