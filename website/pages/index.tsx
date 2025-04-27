import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Persistence Protocol Frontend</title>
        <meta name="description" content="Next.js frontend for Persistence Protocol" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Persistence Protocol Frontend</h1>
      </main>
    </div>
  );
}
