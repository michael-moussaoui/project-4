import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, ValidationError } from '@formspree/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Cursor from '../components/Cursor'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Show,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'

export default function Contact() {
   
  const [state, handleSubmit] = useForm("mjvlongq")
  const [show, setShow] = useState()
  const router = useRouter()

  const handleShow = () => setShow( true )

  useEffect(() =>{
    if (state.succeeded) {
  
      setTimeout(() => {
        router.push('/')
      }, 2000)
  }
  }, )

  return (
    
    <motion.div
     initial={{ opacity:0}}
     animate={{ opacity:1}}
     exit={{ opacity: 0}}
     transition={{ duration: 0.3 }}>
     <Head>
      <title>Contactez-moi</title>
     </Head>
    <Navbar />
    <Cursor />
    <Flex
      
      bgImage="url(./camera_5.jpg)"
      bgRepeat = 'no-repeat'
      bgPosition = 'center center'
      bgAttachment = 'fixed'
      bgSize = 'cover'
      align="center"
      justify="center"
      height='130vh'
      cursor='none'
      css={{
        backgroundAttachment: 'fixed',
      }}
      id="contact">
      <h1 className="  font-basker  lg:text-5xl md:text-5xl sm:text-2xl xs:text-base text-center text-white absolute md:top-28  sm:top-16 left-1/2 -translate-x-1/2 xs:hidden md:block  sm:w-52  md:w-10/12 ">Contactez-moi</h1>
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        // transform="translateX(-25%)"
        p={{ base: 5, lg: 16 }}>
        <Box width='90vw'>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                width={{ base:'90vw', md:'1vw'}}
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                               
              </Stack>
              <Box  
                borderRadius="lg"
                p={8}
                shadow="xl"             
                width={{ base:'80vw', md:'60vw'}}         
                >
                <form onSubmit={handleSubmit} >
                <VStack spacing={5}>
                  <FormControl  isRequired paddingTop="10">
                    <FormLabel
                    backgroundColor= "rgba(0,0,0,0.7)"
                    width="24"
                    borderRadius={'md'}
                    paddingX= {'2.5'}
                    color="lightgray"
                    _focus={{background:"rgba(0,0,0,0.7)",}}
                    float="right">
                    Nom</FormLabel>

                    <InputGroup>
                      <Input id="name" type="text" name="name" placeholder="Votre nom" _placeholder={{color:'var(--main-color)'}} backgroundColor="rgba(0,0,0,0.7)" height="16" fontSize="xl" color="lightgray" _focus={{border:'1px solid var(--main-color)'}} />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </InputGroup>
                  </FormControl>

                  <FormControl  isRequired >
                    <FormLabel
                    backgroundColor= "rgba(0,0,0,0.7)"
                    width="24"
                    borderRadius={'md'}
                    paddingX= {'2.5'}
                    color="lightgray"
                    float="right">
                    Email</FormLabel>

                    <InputGroup>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        _placeholder={{color:'#e947c9'}}
                        backgroundColor="rgba(0,0,0,0.7)"
                        height="16"
                        fontSize="xl"
                        color="lightgray"
                
                        _focus={{border:'1px solid #e947c9 '}} 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </InputGroup>
                  </FormControl>

                  <FormControl  isRequired>
                    <FormLabel
                    backgroundColor= "rgba(0,0,0,0.7)"
                    width="24"
                    borderRadius={'md'}
                    paddingX= {'2.5'}
                    color="lightgray"
                    float="right"
                    >
                    Message</FormLabel>
                    <Textarea
                      id='message'
                      name="message"
                      placeholder="Votre Message"
                      _placeholder={{color:'#e947c9'}}
                      rows={6}
                      resize="none"
                      backgroundColor="rgba(0,0,0,0.7)"
                      color="lightgray"
                      fontSize="xl"
                      _focus={{border:'1px solid #e947c9 '}} 
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </FormControl>

                  <Button onClick={ handleShow}
                  type="submit" 
                  disabled={state.submitting}
                    backgroundColor= "rgba(0,0,0,0.7)"
                    width="24"
                    borderRadius={'md'}
                    paddingX= {'2.5'}
                    color="white"
                    _hover={{
                      bg: 'transparent',
                      border: 'solid 2px #e947c9',
                      color:'#e947c9'
                    }}
                    isFullWidth>
                    Envoyer
                  </Button>
                  <ValidationError errors={state.errors} />
                </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
    <Footer m="5vh"/>
      </motion.div>
  );
}










