import { Icon } from '@iconify/react';
import styles from './Contact.module.css';

const links = [
  { label: 'Email', text: 'hello@williamwestwood.com', href: 'mailto:hello@williamwestwood.com' },
  { label: 'GitHub', text: '@westwood-dev', href: 'https://github.com/westwood-dev' },
  { label: 'Linkedin', text: 'William Westwood', href: 'https://www.linkedin.com/in/will-westwood/' },
  { label: 'CV', text: 'Download', href: '/William-Westwood-CV.pdf' },
];

export function Contact() {
  return (
    <div className={styles.contactHolder}>
      {links.map(({ label, text, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contact} text-colour`}
        >
          <span className={styles.contactLabel}>{label}</span>
          <span className={styles.contactText}>{text}</span>
          <div className={styles.contactArrow}>
            <Icon icon="material-symbols:arrow-outward" />
          </div>
        </a>
      ))}
    </div>
  );
}
