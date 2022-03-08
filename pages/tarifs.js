import Layout from "../components/Layout"
import { Container,
    chakra,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    Icon,
    useColorModeValue,
    UnorderedList,
    ListItem, 
    StylesProvider,
    color,
    styled} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/provider";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import styles from "../components/tarifs.module.css"

let items = [
  
  { title:"Juste moi", price : "130 Euros",  hover :{bgImage:"url(./male-2322802_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"} ,text:"Séance pour une personne, en extérieur ou en studio"},
  { title:"Pour deux", price : "195 Euros",  hover :{bgImage:"url(./black-and-white-2590810_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"}, text:"Pour deux personnes, en extérieur ou en studio"},
  { title:"Famille", price : "220 Euros",  hover :{bgImage:"url(./family-6475821_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"}, text:`Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
  30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)`},
  { title:"Il était une fois", price : "160 Euros", hover :{bgImage:"url(./baptism-4598749_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"},text:`Photo de grossesse (À votre domicile, en extérieur ou en studio)`},
  { title:"Mon bébé", price : "100 Euros", hover :{bgImage:"url(./bebe-1237704_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"}, text:`Photo d’enfant jusqu’à 3 ans (photo à domicile)  `},
  { title:"J'immortalise l'évènement", price : "Sur devis", hover :{bgImage:"url(./couple-1850073_640.jpg)",color:"transparent", bgAttachment:"center", bgSize: "cover"}, text:"Prestation de mariage ou baptême sur devis"}

]

export default function tarifs(){
    return(
      <motion.div
      initial={{ scaleY:0}}
      animate={{ scaleY:1}} 
      exit={{ scaleY: 0}}
      transition={{ duration: 0.5 }}>
        <Layout>
        <ChakraProvider>
     <h1 className="  font-basker lg:text-5xl md:text-5xl sm:text-2xl xs:text-base text-center  text-slate-light absolute md:top-28  sm:top-16 left-1/2 -translate-x-1/2 xs:hidden md:block  sm:w-52  md:w-10/12 ">Tarifs - Prestations</h1>
     <Grid 
    // className={styles.grid}
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
    color= 'lightgray'
    pb={125} 
    _hover={{color: "transparent"}}
            
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

  
  <chakra.h3
  
                  // py={}
                  position="relative"
                  top= "-55px"
                  marginTop= "2rem"
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  // _hover={{color: "transparent"}} 
                  letterSpacing={1} >
                  {item.title}

                 <chakra.h2
                 position="relative"
                 textTransform="lowercase"
                 top="100px"
                 >
                 {item.text}

                 </chakra.h2>
                </chakra.h3>
   
                    <chakra.span
                    // py={140}
                    position="relative"
                    top=" 75%"
                    fontWeight="bold"
                    color='lightgray'>           
                    {item.price}
                    </chakra.span>           
  </GridItem>
  ))
    } 
</Grid>
             <Footer />
           </ChakraProvider>           
           </Layout>
           </motion.div>
           
      
    )}  

