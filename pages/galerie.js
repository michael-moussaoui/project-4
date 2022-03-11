/* eslint-disable */

import Image from "next/image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { chakra, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


let items = [
  
  {  hover :{bgImage:"url(./male-2322802_640.jpg)", bgAttachment:"center", bgSize: "cover"}},
  {  hover :{bgImage:"url(./black-and-white-2590810_640.jpg)", bgAttachment:"center", bgSize: "cover"}},
  {  hover :{bgImage:"url(./family-6475821_640.jpg)", bgAttachment:"center", bgSize: "cover"}},
  {  hover :{bgImage:"url(./baptism-4598749_640.jpg)", bgAttachment:"center", bgSize: "cover"}},
  // { hover :{bgImage:"url(./bebe-1237704_640.jpg)", bgAttachme{ hover :{bgImage:"url(./couple-1850073_640.jpg)", bgAttachment:"center", bgSize: "cover"}}

]


export default function galerie({ images }) {
    
    return (
      <motion.div
      initial={{ scaleY:0}}
      animate={{ scaleY:1}} 
      transition={{ duration: 0.5 }}
      exit={{ scaleY: 0}}>
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
	
 {/* Mariage
 Grossesse
 Bébé
 Famille 
 baptême
 Couple */}
 {/* <ul className={`navbar_links flex md:flex-row mr-10 sm:flex-col sm:absolute md:left-1/2 sm:-translate-x-1/2 sm:content-center sm:-translate-y-5  sm:mt-10  md:inline-flex md:-translate-y-10 w-3/4 mx-auto transition-all duration-1000 ease-in ${open ? ' sm:left-1/2 sm:mb-0':' sm:-left-96 sm:mb-40'}`}>
                { links.map((link) => (
                    
                    <li
                     key={link}
                     className={styles.navbar_item} >
                        <Link href={link.link}>
                            <a className="navbar_link">{link.name}</a>
                        </Link>
                    </li>
                    ))
                }
                </ul> */}
        <Grid
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
                  {item.title}
                  
                </chakra.h3>
   
                    <chakra.span
                    fontWeight="bold"
                    color='lightgray'>           
                    {item.price}
                    </chakra.span>
                    
             
  </GridItem>
  ))
    } 
</Grid>
        
          
               
              
          
          
        
        
    <Footer m="5vh"/>
	</Flex>
	
    </Layout>
    <AnimatePresence exitBeforeEnter/>
    </motion.div>
    
	)
        }

// export async function getStaticProps() {
//   const params = {
//     expression: 'folder=""'
//   }
//   const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
//   headers: {
//     Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//   }
// }).then(r => r.json());
// const { resources } = results;

// const images = resources?.map(resource => {
//   const { width, height } = resource;
  
//   return {
//     id: resource.asset_id,
//     title: resource.public_id,
//     image: resource.secure_url,
//     width,
//     height
//   }
 
// });

//   return  {
//     props: {
      
         
//     }
    
//   }


// }
