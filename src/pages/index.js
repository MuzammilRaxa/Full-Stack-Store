import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeMain from './home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="E-commerce Project" content="This is build with the out standing technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ficon.png" />
      </Head>
      <main className={styles.main}>
       <HomeMain/>
      </main>
    </>
  )
}
