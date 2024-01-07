'use client';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="loginButton">
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/login')}
        >
          Login
        </Button>
      </div>
      <main className={styles.main}>
        <h2>Resume Page</h2>
      </main>
    </>
  );
}
