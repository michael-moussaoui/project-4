import styles from './footer.module.css'
import React from 'react'

const Footer = () => {
    return (
      <footer className={styles.footer}>
      
        <a className={styles.name} href="#">&copy;&nbsp; Charles CANTIN {new Date().getFullYear()}</a> 
      </footer>
    )
  }
  
  export default Footer;
