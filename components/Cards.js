import React from 'react'
import styles from '../styles/Home.module.css'
import { chakra } from '@chakra-ui/react'
import { Img, Box } from '@chakra-ui/react'




const Cards = (props) => {
    const { id, title, url} = props
  return (
    <Box>
             <Img
             key={id}
             width='100%' 
            //  height='300'
             src = {"https:"+ url}
             alt=''
             />
             <div className='textWrap max-w-4xl text-center'></div>
          
    </Box>
  )
}

export default Cards