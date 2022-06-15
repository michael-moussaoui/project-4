/* eslint-disable */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { chakra, Flex, Box, Grid, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as contentful from "contentful";
import GalleryList from "../components/galleryList";
import Cursor from "../components/Cursor";
import { FaArrowAltCircleUp } from "react-icons/fa";
// import ScrollToTop from "../components/ScrollToTop";

export async function getStaticProps() {
   
const client = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCES_TOKEN ,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  
});


  // Get data from headless cms
  const gallery = await client.getEntries({
    content_type : "gallery",
  })
  
  return {
    props : {
    galeries: gallery.includes
    } 
  }  
}



export default function Galerie({ galeries}  ) {

    const [showTopBtn,setShowTopBtn] = useState(false)
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    },[])

  const topRef = (ref) => window.scrollTo(0, ref.current) 
  const myRef = useRef(null)
  const executeScroll = () => topRef(myRef)

  // const goToTop = () => {
  //         window.scrollTo({
  //             to:0, 
  //             behavior:"smooth",
          
  
  //         })
  //     }
  
  console.log( galeries );
    return (
      <motion.div
      initial={{  opacity:0}}
      animate={{ opacity:1}} 
      exit={{ opacity:0}}
      transition={{ duration: 0.5 }}>
      <Cursor />
      <Navbar ref={myRef} />
      {/* <div  className=" absolute h-10 w-10 top-20 bg-pink"> */}

      {/* </div> */}
      <Flex 
	    minHeight="100vh" 
      width="100vw" 
	    bgImage="url(./camera_9.jpg)"
      bgRepeat = "no-repeat"
      bgPosition = "center center"
      bgAttachment = "fixed"
      bgSize = "cover"
      color= "#fff"
      cursor="none"
	    overflowX="hidden">

      {/* <ScrollToTop /> */}
      <div className="top-to-btn">
    {/* {" "} */}
    {showTopBtn && (
    <FaArrowAltCircleUp 
         className="icon-position icon-style" 
         onClick={executeScroll}
    />
    )}
    {/* {" "} */}
    </div>
     <GalleryList  />
     <Footer m="5vh"/>
	   </Flex>
     <AnimatePresence exitBeforeEnter/>
     </motion.div>  
	)
   

}
  

  