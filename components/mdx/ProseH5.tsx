import styles from './ProseH5.module.css';

export function ProseH5({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h5 id={id} data-fade="" className={styles.h5}>{children}</h5>;
}
