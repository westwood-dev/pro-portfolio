import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from './ProseA.module.css';

interface Props {
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export function ProseA({ href = '', target, children }: Props) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || target === '_blank';
  const icon = isExternal ? 'material-symbols:arrow-outward' : 'material-symbols:arrow-forward';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.a}>
        {children}
        <span className="sr-only">(opens in new tab)</span>
        <Icon icon={icon} style={{ fontSize: '0.75rem' }} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={styles.a}>
      {children}
      <Icon icon={icon} style={{ fontSize: '0.75rem' }} aria-hidden="true" />
    </Link>
  );
}
