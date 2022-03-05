import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Flex>
      <Navbar/>
      </Flex>
      {/* <nav className="flex float-right pt-10 text-3xl  font-basker" >
        <div className="logo absolute left-5">LOGO</div>
        <ul className="flex flex-row mr-10 z-10 absolute left-1/2 -translate-x-1/2 text-white">
          <li className={styles.li} >
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/galerie">
              <a>Galerie</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/tarifs">
              <a>Tarifs - Prestations</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
       */}
       
      <main className={styles.main}>
      <div>
        <h1 className= {styles.title} >
         Charles CANTIN
        </h1>

        <p className={styles.description}>
          Photographe
        </p>
      </div>
      </main>
 
    </div>
  )
}
