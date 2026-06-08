import styles from './ProsePre.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  'data-language'?: string;
}

export function ProsePre({ children, className, 'data-language': language }: Props) {
  return (
    <div className={styles.codeCont} data-fade="">
      {language && <div className={styles.codeLang}>{language}</div>}
      <pre className={className}>{children}</pre>
    </div>
  );
}
