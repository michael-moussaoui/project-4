import * as contentful from "contentful"
import Navbar from "../components/Navbar"
import Cursor from "../components/Cursor"
import { Container,
    chakra,
    Grid,
    GridItem,
    Image,
    Box,
    Text,
    Badge,
    Flex 
  } from "@chakra-ui/react";


import Prestation from "../components/Prestation";
import { ChakraProvider } from "@chakra-ui/provider";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import styles from "../components/tarifs.module.css"


export async function getStaticProps() {

const client = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCES_TOKEN ,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
 
  
});

  // Get data from headless cms
  const prestation = await client.getEntries({
    content_type: 'prestation',
  })
  return{
    props :{
      prestations: prestation.includes

    }
  }
}




export default function tarifs(){
    return(
      <motion.div
      initial={{ opacity:0}}
     animate={{ opacity:1}}
     exit={{ opacity: 0}}
     transition={{ duration: 0.5 }}>
        <Navbar />
        <Cursor />
        <ChakraProvider>
  
    <Grid 
    w='full'
    minHeight='150vh'
    templateColumns={{lg:'repeat(3, 1fr)', md: 'repeat(2,1fr)', sm:'repeat(1, 1fr)'}}  
    gap={55}
    pt={300} 
    bgImage= 'url(./camera_6.jpg)'
    bgRepeat = 'no-repeat'
    bgPosition = 'center center'
    bgAttachment = 'fixed'
    bgSize = 'cover'
    pb={125}  
    cursor= 'none'      
     >
     <Prestation/>
    </Grid>
    <Footer />
    </ChakraProvider>           
    {/* </Layout> */}
    </motion.div>     
      
    )} 
    
    