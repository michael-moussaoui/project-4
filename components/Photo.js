import React from 'react'
import { Img, Box, Hide } from '@chakra-ui/react'
import styles from './photos.module.css'
import { motion } from 'framer-motion'


function Photo(props) {
// console.log(props);
const { id, galleryTitle, url} = props
  return (
    <Box >
             <Img
             key={id}
             width={350} 
             height={200}
             src = {"https:"+ url}
             alt=''
             className={styles.photo}
             _hover={{transform: 'scale(2)', position:'relative', transition: 'ease 0.7s'}}
             
             
             
             />
    </Box>
  )
}

export default Photo




