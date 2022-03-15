import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GenerationCounter from '../components/GenerationCounter/GenerationCounter'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenerationCounter></GenerationCounter>
      <main className={styles.main}>

      </main> 
    </div>
  )
}

export default Home
