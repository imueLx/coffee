
import Head from 'next/head'
import Featured from '../component/Featured';
import styles from '../styles/Home.module.css'

export default function Home({coffeeList, admin}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Crave.Kape</title>
        <meta name="description" content="Best Brewed Coffee for less" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  );
}

