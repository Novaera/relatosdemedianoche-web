import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Relatos de media noche</title>
        <meta name="description" content="Podcast de horror y misterio" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className={styles.logo}></div>
      <div className={styles.slogan}></div>

      <div className={styles.grid}>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/docs" className={styles.instagram}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.spotify}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.youtube}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.tiktok}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.twitter}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.web}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.deezer}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.apple}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.google}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.mail}></a>
        <a target='_blank' rel='noreferrer' href="https://nextjs.org/learn" className={styles.whatsapp}></a>
      </div>

      <footer className={styles.footer}></footer>
    </>
  )
}
