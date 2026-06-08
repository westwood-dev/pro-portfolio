import styles from './ProseTable.module.css';

export function ProseTable({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.tableWrap} data-fade="">
      <table className={styles.table}>{children}</table>
    </div>
  );
}
