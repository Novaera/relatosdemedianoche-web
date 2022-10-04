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
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/relatos_de_media_noche/" className={styles.instagram}></a>
        <a target='_blank' rel='noreferrer' href="https://open.spotify.com/show/0OzIxfsRaqqSAGmvN3LPKo?si=2935YyxTRiCrWrdyHt2Hig&nd=1" className={styles.spotify}></a>
        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/channel/UCn71qGKJbgcspXA5LQ3tErA" className={styles.youtube}></a>
        <a target='_blank' rel='noreferrer' href="https://www.tiktok.com/@relatosdmn?is_from_webapp=1&sender_device=pc" className={styles.tiktok}></a>
        <a target='_blank' rel='noreferrer' href="https://twitter.com/relatos_dmn" className={styles.twitter}></a>
        <a target='_blank' rel='noreferrer' href="https://www.deezer.com/mx/show/508632" className={styles.deezer}></a>
        <a target='_blank' rel='noreferrer' href="https://podcasts.apple.com/us/podcast/relatos-de-media-noche/id1481484151" className={styles.apple}></a>
        <a target='_blank' rel='noreferrer' href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMjgxOTg4L3BvZGNhc3QvcnNz" className={styles.google}></a>
        <a target='_blank' rel='noreferrer' href="mailto:contactorelatosdmn@gmail.com" className={styles.mail}></a>
        <a target='_blank' rel='noreferrer' href="https://wa.me/573138961908" className={styles.whatsapp}></a>
      </div>

      <footer className={styles.footer}></footer>
    </>
  )
}
