// import Navbar from "../components/Navbar"
import Navbar from "../components/Navbar"
import styles from "./layout.module.css"
import React from 'react'
import Head from "next/head"

 
import Footer from "./Footer"




  
const Layout = ({ children, page, className, ...rest }) => {
    let layoutClassName = styles.layout;
  
    if ( className ) {
      layoutClassName = `${layoutClassName} ${className}`
    }
  
    return (
      <body className={layoutClassName} {...rest}>
        <Head>
        
        <title className={styles.title}>{page}</title>
        </Head>
        <Navbar/>
        
        <main className={styles.main}>{ children }</main>
        
      </body>
    )
  }
  
  export default Layout;
  