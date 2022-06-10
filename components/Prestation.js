import React from 'react'
import { useState, useEffect, useCallback } from 'react';
// import { client } from '../utils/client'
import { motion } from 'framer-motion';
import Cards from './Cards'
import { Container,
    chakra,
    Grid,
    GridItem,
    Box,
    Text,
    Badge,
    Flex 
  } from "@chakra-ui/react";

function Prestation() {
    const [isGalleryLoading, setIsGalleryLoading] = useState(false)
    const [galleryCard, setGalleryCard]= useState([])
     
    const cleanUpGalleryCards = useCallback ((rawData) => {
        const cleanCards = rawData.map((cards) => {
          const { fields , sys} = cards
          const {id} = sys
          const title = fields.title
          const url = fields.photo.fields.file.url
          const details = fields.details.content[0].content[0].value
          const price = fields.prix.content[0].content[0].value
          const upDatedCards = { id, title, url, details, price}
          console.log(id);
          return upDatedCards
        })
        
        setGalleryCard(cleanCards)
      }, [])
      const getAllGallery = useCallback (async () => {
        setIsGalleryLoading(true)
        try {
          const response = await client.getEntries({ content_type: 'prestation', })
          const responseData = response.items
          console.log(responseData);
          cleanUpGalleryCards(responseData)
          if (responseData){
            cleanUpGalleryCards(responseData)
          } else {
            setGalleryCard([])
          }
          setIsGalleryLoading(false)
      } catch (error) {
         console.log(error);
         setIsGalleryLoading(false)
        }
      },[cleanUpGalleryCards])
    
      useEffect (() => {
        getAllGallery()
      }, [getAllGallery]) 

      
  return (
    
    <>
    { galleryCard.map((item) => {
        const { id, title, url, price, details} = item
        return (
   
   <Box
   
  key={id} 
  position="relative"
  p="5"
  maxW="380px" 
  borderWidth="1px" 
  mx="14" 
  w="70%"
  h="300"
  bg= "rgba(0,0,0,0.6)"
  boxShadow = " 0 3px 8px lightgray" 
  color= 'white'
  transition="ease 0.7s"
  _hover={{backgroundImage: "https:"+ url, 
    bgAttachment:"center",
    bgPosition:"center", 
    bgSize: "cover",
    color:"transparent", 
    transform:"scale(1.1)",
    boxShadow:" 0 3px 8px violet"}}>
  {/* <Cards  title={title} url={url} /> */}
        
        <Flex align="baseline" mt={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {title}
          </Text>
        </Flex>
        <Text mt={2} fontSize={{ xl:"xl", l:"l", md:"md"}} fontWeight="semibold" lineHeight="short">
          {details}
        </Text>
        <Badge colorScheme="pink" position= 'absolute' bottom={2} right={2}>
        {price}
        </Badge>        
      </Box> 
        )      
  })} 
  </>
  )
}

export default Prestation