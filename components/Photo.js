import React from 'react'
import { Img, Box } from '@chakra-ui/react'
import styles from './photos.module.css'

function Photo(props) {
const { id, galleryTitle, url} = props
  return (
    <Box >
             <Img
             key={id}
             width={350} 
             height={200}
             src = {"https:"+ url}
             alt=''
             transition= 'ease 0.7s'
             className={styles.photo}
             _hover={{transform: 'scale(1.1)', boxShadow:'0 3px 8px violet' }}
             
             
             
             />
    </Box>
  )
}

export default Photo




