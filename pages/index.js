import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { AnimatePresence, useTransform, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'


export default function Home() {
  
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }
 
      
    

  return (
    <motion.div 
     initial={{ scaleY:0}}
     animate={{ scaleY:1}}
     exit={{ scaleY: 0}}
     transition={{ duration: 0.5 }}>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico" />
        
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
    <AnimatePresence exitBeforeEnter/>
    </motion.div>
  )
}
