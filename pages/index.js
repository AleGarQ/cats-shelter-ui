import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Shelter</title>
        <link rel="icon" href="/app-icon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/animal/register">
          Register animal
        </Link>
        <Link href="/animal/list">
          List Animal
        </Link>
      </main>

      <footer className={styles.footer}>
        Based on Animal-Shelter from The Dream Team!
      </footer>
    </div>
  )
}
