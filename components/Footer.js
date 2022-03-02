import styles from './footer.module.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons"
  




const Footer = ({ ...rest }) => {
    return (
      <footer className={styles.footer} {...rest}>
      <div className=' absolute w-80 right-10 '>
        <FontAwesomeIcon className={styles.icones} icon={faFacebook}/>
        <FontAwesomeIcon className={styles.icones} icon={faTwitter} />
        <FontAwesomeIcon className={styles.icones} icon={faInstagram}  />
        </div>
        &copy;&nbsp;<a href="#">Charles CANTIN</a>, {new Date().getFullYear()}
      </footer>
    )
  }
  
  export default Footer;
