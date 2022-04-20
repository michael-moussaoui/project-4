import React from 'react'
import styles from '../styles/Home.module.css'
import { chakra } from '@chakra-ui/react'
import { Img, Box } from '@chakra-ui/react'




const Cards = (props) => {
    const { id, galleryTitle, url} = props
  return (
    <Box>
             <Img
             key={id}
             width='100%' 
             height='100%'
             src = {"https:"+ url}
             alt=''
             />
             <div className='textWrap max-w-4xl text-center'>
           {/* <h2 className=' text-7xl font-basker '>{galleryTitle}</h2> */}
            </div>
          {/* </div>   */}
    </Box>
  )
}

export default Cards