import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from '@/styles/common.module.css';

const Redirect: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;

    if (pathname == '/redirect') {
      router.push({
        pathname: '/shopping_cart',
        query: { form: pathname },
      });
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>redirecting - next_test</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting</h1>
      </main>
    </div>
  );
};

export default Redirect;
