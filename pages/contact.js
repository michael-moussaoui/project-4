import React from 'react';
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../components/footer.module.css'
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';

import {
    faFacebook,
    faTwitter,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons"


export default function ContactFormWithSocialButtons() {
   
  const [state, handleSubmit] = useForm("mjvlongq");
  if (state.succeeded) {
      return <p>Merci pour votre message</p>;
  }
  return (
    
    <motion.div
     initial={{ opacity:0}}
     animate={{ opacity:1}}
     transition={{ duration: 1.1 }}
     exit={{ opacity: 0}}>
    <Layout>
    <Flex
      
      bgGradient="linear(to-r,#454545, #999)"
      bgImage="url(./camera_5.jpg)"
      bgRepeat = 'no-repeat'
      bgPosition = 'center center'
      bgAttachment = 'fixed'
      bgSize = 'cover'
      align="center"
      justify="center"
      height='130vh'
      css={{
        backgroundAttachment: 'fixed',
      }}
      id="contact">
      <h1 className="  font-basker  lg:text-5xl md:text-5xl sm:text-2xl xs:text-base text-center text-gray-light absolute md:top-28  sm:top-16 left-1/2 -translate-x-1/2 xs:hidden md:block  sm:w-52  md:w-10/12 ">Contactez-moi</h1>
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
                    float="right">
                    Nom</FormLabel>

                    <InputGroup>
                      <Input id="name" type="text" name="name" placeholder="Votre nom" _placeholder={{color:'#e947c9'}} backgroundColor="rgba(0,0,0,0.7)" height="16" fontSize="xl" color="lightgray" _focus={{border:'1px solid #e947c9 '}} />
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

                  <Button 
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
                   {/* <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>  */}
                </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
    <Footer m="5vh"/>
      </Layout>
      </motion.div>
  );
}










