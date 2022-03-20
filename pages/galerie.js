/* eslint-disable */

import Image from "next/image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { chakra, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import babies from "../db/baby"
import baptisms from "../db/baptism"
import couples from "../db/couple"
import familys from "../db/family"
import portraits from "../db/portrait"
import pregnants from "../db/pregnant"
import weddings from "../db/wedding"
import { useEffect, useState } from "react";



let items = [
  {title : "Portrait"},
  {title : "Mariage"},
  {title : "Grossesse"},
  {title : "Bébé"},
  {title : "Famille"},
  {title : "Baptême"},
  {title : "Couple"},
]


export default function galerie() {
  // const [photos, setPhotos] = useState ( [] )

  // useEffect(() => {
  //   setPhotos(portraits)
  // },[] )
    
    return (
      <motion.div
      initial={{ scaleY:0 , opacity:1}}
      animate={{ scaleY:1}} 
      transition={{ duration: 0.5 }}
      exit={{ scaleY: 0, opacity:0}}>
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

    <h1 className=" text-7xl font-basker  absolute top-28 left-1/2 text-lightgray -translate-x-1/2">Galerie</h1>

    {/* <Grid 
       display= 'grid'
       gridTemplateColumns= '250px 1fr'

    > */}
    
      <nav className=" h-full w-48 fixed text-xl mt-40 text-center "
      
      >
      { items.map((item) => (
    <ul className=" w-full "
       
       >
      <li className=" block pl-5 pt-4 cursor-pointer w-full hover:translate-x-5 hover:bg-black "
      key={item}
       >
      
      {item.title}

      </li>
    </ul>

    ))
    }
    </nav>
    
    <div className="w-full mt-20 ">
        {familys.map(({id, picture}) => (
    <div key={id} className="w-1/2 relative left-1/2 -translate-x-1/2   "> 
          <img className=" mt-32 rounded-md " src= {picture} alt = {id}></img>

    </div>
    
    ))}
    </div>
    
    {/* </Grid> */}

	
     
               
       
          
               
               
        
    <Footer m="5vh"/>
	
	</Flex>
    </Layout>
    <AnimatePresence exitBeforeEnter/>
    </motion.div>
    
	)
        }

 {/* <Grid
        w='full'
    minHeight='150vh'
    templateColumns={{lg:'repeat(3, 1fr)', md: 'repeat(2,1fr)', sm:'repeat(1, 1fr)'}}  
    gap={50}
    pt={300} 
    
    
    bgRepeat = 'no-repeat'
    bgPosition = 'center center'
    bgAttachment = 'fixed'
    bgSize = 'cover'
    color= 'lightgray'
    pb={125}              
     >
    { items.map((item) => (
  <GridItem 
      key={item}
  mx="14"     
  w="70%"
  h="300"
  bg= "rgba(0,0,0,0.6)"
  boxShadow = " 0 3px 8px lightgray"
  _hover={item.hover}
  cursor= "pointer" >
  <Image src =  '/camera_4.jpg' width="400%" height="330" alt=""/>
  
  <chakra.h3
  
                  py={140}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1} >
                  {/* {item.title} */}
                  
                {/* </chakra.h3>
   
                    <chakra.span
                    fontWeight="bold"
                    color='lightgray'>           
                    
                    </chakra.span>
                    
             
  </GridItem>
  ))
    } 
</Grid> */} 
        