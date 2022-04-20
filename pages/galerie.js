/* eslint-disable */

import Image from "next/image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { chakra, Flex, Box, Grid, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import * as contentful from "contentful"
// import Gallery from "../components/Gallery";
import GalleryList from "../components/GalleryList";
import styles from '../components/galerie.module.css'



// console.log(contentful, 'contentful');

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCES_TOKEN ,
  
});

export default function Galerie({ galeries}  ) {
  console.log( galeries );
  
    return (
      <motion.div
      initial={{  opacity:0}}
      animate={{ opacity:1}} 
      transition={{ duration: 1.1 }}
      exit={{ opacity:0}}>
    <Layout>
    <Flex 
	    height="150vh" 
      width="100vw" 
	    bgImage="url(./camera_9.jpg)"
      bgRepeat = 'no-repeat'
      bgPosition = 'center center'
      bgAttachment = 'fixed'
      bgSize = 'cover'
      color= 'lightgray'
	    overflowX="hidden">

    {/* <h1 className=" text-7xl font-basker  absolute top-28 left-1/2 text-lightgray -translate-x-1/2">Galerie</h1> */}

    {/* <div className=" w-full h-4/6 relative top-48 mb-40" > */}
    {/* <Gallery/> */}
    {/* </div> */}
    {/* <div className="h-20 relative right-1/2 -translate-x-1/2 top-[750px]">
    <Link to='gridList' smooth={true}>
     <FontAwesomeIcon className='text-5xl cursor-pointer' icon={faAngleDoubleDown}/> 
    </Link>
    </div> */}
    {/* <div className={styles.galleryList}> */}
    
      <GalleryList  />
      
    {/* </div>   */}
   
    <Footer m="5vh"/>
	
	</Flex>
    </Layout>
    <AnimatePresence exitBeforeEnter/>
    </motion.div>  
	)
   }

  export async function getServerSideProps() {
   
    // Get data from headless cms
    const gallery = await client.getEntries({
      content_type : 'gallery',
    })
    
    return {
      props : {
      galeries: gallery.includes
      } 
    }  
  }
  

  