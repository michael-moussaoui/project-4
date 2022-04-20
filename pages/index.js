import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { AnimatePresence, useTransform, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'


export default function Home() {
    

  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div 
     initial={{ opacity:0}}
     animate={{ opacity:1}}
     exit={{ opacity: 0}}
     transition={{ duration: 1.1 }}>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico"/>
        
      </Head>
      
      {/* <Flex> */}
      <Navbar/>
      {/* </Flex> */}
      
      <motion.div
  
/>
      <main  className={styles.main} >
      
        <h1 className= {styles.title} >
         Charles CANTIN
        </h1>

        <p className={styles.description}>
          Photographe
        </p>
      
      </main>
 
    </div>
    </motion.div>
    </AnimatePresence>
  )
}
