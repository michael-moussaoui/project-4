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
     initial={{ translateX:-2000}}
     animate={{ translateX:0}}
     exit={{ translateX: 2000}}
     transition={{ duration: 1.5 }}>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico"/>
        
      </Head>
      
      <Flex>
      <Navbar/>
      </Flex>
      
      <motion.div
  
/>
      <main  className={styles.main} >
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
    </motion.div>
    </AnimatePresence>
  )
}
