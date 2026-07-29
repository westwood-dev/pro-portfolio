'use client';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Hmm, something isn&#39;t right here</p>
      <button onClick={() => router.push('/')}>Head home?</button>
    </div>
  );
}
