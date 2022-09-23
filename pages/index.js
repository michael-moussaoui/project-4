import Navbar from "../components/Navbar"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { motion } from "framer-motion"
import { AnimatePresence, useTransform, useMotionValue } from "framer-motion"
import Footer from "../components/Footer"
import Cursor from "../components/Cursor"

export default function Home() {


  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div 
     initial={{ opacity:0}}
     animate={{ opacity:1}}
     exit={{ opacity: 0}}
     transition={{ duration: 0.3 }}>
    <div className={styles.container}>
   
    <Head>
        <title>Charles CANTIN</title> 
    </Head>
    <Cursor />
      <Navbar/>
      <motion.div/>
      <main  className={styles.main} >
        <h1 className= {styles.title} >
         Charles CANTIN
        </h1>
        <p className={styles.description}>
          Photographe
        </p>
      </main>
    </div>
    <Footer />
    </motion.div>
    </AnimatePresence>
  )
}
