import styles from './ProsePre.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ProsePre({ children, className }: Props) {
  const language = className?.replace('language-', '') ?? null;

  return (
    <div className={styles.codeCont}>
      {language && <p className={styles.codeLang}>{language}</p>}
      <pre className={className}>{children}</pre>
    </div>
  );
}
