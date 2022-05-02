import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { client } from '../utils/client'
import Cards from './Cards';


const Gallery = () => {
  const [isGalleryLoading, setIsGalleryLoading] = useState(false)
  const [ galleryCards, setGalleryCards] = useState([])

  const cleanUpGalleryCards = useCallback ((rawData) => {
    const cleanCards = rawData.map((slide) => {
      const { fields , sys} = slide
      const {id} = sys
      const galleryTitle = fields.title
      const url = fields.image.fields.file.url
      const upDatedslide = { id, galleryTitle, url}
      return upDatedslide
    })
    
    setGalleryCards(cleanCards)
  }, [])
  const getAllGallery = useCallback (async () => {
    setIsGalleryLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'prestation' })
      const responseData = response.items
      console.log(responseData);
      cleanUpGalleryCards(responseData)
      if (responseData){
        cleanUpGalleryCards(responseData)
      } else {
        setGalleryCards([])
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
  
  if (!Array.isArray(galleryCards) || !galleryCards.length) {
    return null
  }
  

  return (
    <>
    
       
    {galleryCards.map((item) => {
        const { id, galleryTitle, url} = item
        return (
         
          key={id}>
          <Cards  galleryTitle={galleryTitle} url={url} /> 
          
          
        )
      })}
   
    </>
  )
}

export default Gallery