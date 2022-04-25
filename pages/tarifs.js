import * as contentful from "contentful"
import Layout from "../components/Layout"
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

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCES_TOKEN ,
  
});

// const items = [
  
//   { title:"Juste moi", price : "130€ ",  hover :{bgImage:"url(./male-2322802_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"} ,text:"Séance pour une personne, en extérieur ou en studio"},
//   { title:"Pour deux", price : "195€",  hover :{bgImage:"url(./black-and-white-2590810_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"}, text:"Pour deux personnes, en extérieur ou en studio"},
//   { title:"Famille", price : "220€",  hover :{bgImage:"url(./family-6475821_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"}, text:`Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
//   30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)`},
//   { title:"Il était une fois", price : "160€ ", hover :{bgImage:"url(./pregnancy-1742141_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"},text:`Photo de grossesse (À votre domicile, en extérieur ou en studio)`},
//   { title:"Mon bébé", price : "100€ ", hover :{bgImage:"url(./bebe-1237704_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"}, text:`Photo d’enfant jusqu’à 3 ans (photo à domicile)  `},
//   { title:"J'immortalise l'évènement", price : "Sur devis", hover :{bgImage:"url(./couple-1850073_640.jpg)",color:"transparent", bgAttachment:"center",bgPosition:"center", bgSize: "cover"}, text:"Prestation de mariage ou baptême sur devis"}

// ]

export default function tarifs(){
    return(
      <motion.div
      initial={{ opacity:0}}
     animate={{ opacity:1}}
     exit={{ opacity: 0}}
     transition={{ duration: 1.1 }}>
        <Layout>
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
     >
     <Prestation />
    
    </Grid>
     <Footer />
           </ChakraProvider>           
           </Layout>
           </motion.div>     
      
    )} 
    
    export async function getServerSideProps() {

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
 