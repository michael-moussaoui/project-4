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
             className={styles.photo}
             _hover={{transform: 'scale(1.2porn)', position:'relative', transition: 'ease 0.7s'}}
             
             
             
             />
    </Box>
  )
}

export default Photo




