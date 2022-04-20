import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { client } from '../utils/client'
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
          const galleryTitle = fields.title
          const url = fields.image.fields.file.url
          const upDatedslide = { id, galleryTitle, url}
          return upDatedslide
        })
        
        setGalleryCard(cleanCards)
      }, [])
      const getAllGallery = useCallback (async () => {
        setIsGalleryLoading(true)
        try {
          const response = await client.getEntries({ content_type: 'gallerie', })
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

      console.log(galleryCard)
  if (!Array.isArray(galleryCard) || !galleryCard.length) {
    return null
  }
      
  return (
    
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
    { galleryCard.map((item) => {
        const { id, galleryTitle, url} = item
        return(
  
   <Box
  key={item} 
  p="5"
  maxW="380px" 
  borderWidth="1px" 
  mx="14" 
  w="70%"
  h="300"
  bg= "rgba(0,0,0,0.6)"
  boxShadow = " 0 3px 8px lightgray" 
  color= 'white'
  cursor= "pointer"
  _hover={item.url}>
  <Cards  galleryTitle={galleryTitle} url={url} />
        
        <Flex align="baseline" mt={2}>
          {/* <Badge colorScheme="pink">Plus</Badge> */}
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {item.title}
          </Text>
        </Flex>
        <Text mt={2} fontSize={{ xl:"xl", l:"l", md:"md"}} fontWeight="semibold" lineHeight="short">
          {item.text}
        </Text>
        <Text mt={2}>{item.price}</Text>     
      </Box>  
        )      
  })} 
    </Grid>
  )
}

export default Prestation