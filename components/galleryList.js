import styles from './galleryList.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { client } from '../utils/client';
import React from 'react';
import Photo from './Photo';
import { Grid, GridItem } from '@chakra-ui/react';




const galleryList = () => {
   const sound = useRef()
    const [isGalleryLoading, setIsGalleryLoading] = useState(false)
    const [ galleryLists, setGalleryLists] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [inputBg, setInputBg] = useState(true)
    const categories = [ "baptême","bébé","couple","grossesse","mariage","portrait"]
    
  
    const cleanUpGallerySlides = useCallback ((rawData) => {
      const cleanSlides = rawData.map((slide) => {
        const { fields , sys} = slide
        const {id} = sys
        const galleryTitle = fields.title
        const url = fields.file.url
        const upDatedslide = { id, galleryTitle, url}
        return upDatedslide
      })
  
      setGalleryLists(cleanSlides)
    }, [])
    const getAllGallery = useCallback (async () => {
      setIsGalleryLoading(true)
      try {
        const response = await client.getAssets()
        const responseData = response.items
        // console.log(responseData);
        cleanUpGallerySlides(responseData)
        if (responseData){
          cleanUpGallerySlides(responseData)
        } else {
          setGalleryLists([])
        }
        setIsGalleryLoading(false)
    } catch (error) {
       console.log(error);
       setIsGalleryLoading(false)
      }
    },[cleanUpGallerySlides])
  
    useEffect (() => {
      getAllGallery()
    }, [getAllGallery]) 

    const changeInputBg = () =>{
      console.log(window.scrollY);

      if(window.scrollY >= 30) {
        setInputBg(false)
    } else {
        setInputBg(true)
    }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeInputBg)
       return () => {
           window.removeEventListener('scroll', changeInputBg)
       }
  }, [])
    
   
    return (
      
      <div  className={styles.mainDiv}>
        {/* <div className={styles.inputAll}> */}
        <div className={inputBg? styles.inputAll : styles.inputAll_}>
          <ul className=' md:text-xl sm:text-l '>
          
        {categories.map((category, index) => (
            <li key={index} className='    sm:left-1/2   sm:text-l md:text-xl '>
              <input className={styles.input} type='radio' id={category} name='category' 
                 onChange={(e) => setSelectedCategory(e.target.id)}/>
                  <label className={styles.label} htmlFor={category}>{category}</label> 
            </li>
            ))}
          </ul> 
       </div>   
      <Grid className={styles.gallery}>
        
      {galleryLists
      .filter((category) => category.galleryTitle.includes(selectedCategory))
      .map((item) => {
          const { id, galleryTitle, url} = item
          return (
                   
            <GridItem w='100%'  key={id}>
             <Photo  galleryTitle={galleryTitle} url={url}  />        
            </GridItem>
          )
        })}
      </Grid>    
     </div>
     
    )
  }
  export default galleryList

