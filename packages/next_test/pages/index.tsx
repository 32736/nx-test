import type { NextPage } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';

import commonStyles from '@/styles/common.module.css';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const handleRedirectBtnClick1 = () => {
    router.push('/redirect');
  };
  const handleRedirectBtnClick2 = () => {
    router.replace({
      pathname: '/shopping_cart',
      query: { method: '2' },
    });
  };

  return (
    <div className={commonStyles.container}>
      <Head>
        <title>next_test</title>
      </Head>
      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>
          Go to <a href="/shopping_cart">shopping_cart</a>
        </h1>
        <p className={styles['redirection-methods']}>
          <button className={styles.redirect} onClick={handleRedirectBtnClick1}>
            redirection method 1
          </button>
          <button className={styles.redirect} onClick={handleRedirectBtnClick2}>
            redirection method 2
          </button>
        </p>
      </main>
    </div>
  );
};

export default Home;
