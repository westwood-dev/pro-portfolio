import styles from './ProseH2.module.css';

export function ProseH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h2 id={id} data-fade="" className={styles.h2}>{children}</h2>;
}
