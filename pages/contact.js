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
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';

// import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/footer.module.css'
import Footer from '../components/Footer';


export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('charlescantin@cantin.com');
  return (
    <Layout>
    <Flex
      // bg={useColorModeValue('gray.100', 'gray.900')}
      bgGradient="linear(to-r,#454545, #999)"
      align="center"
      justify="center"
      height='100vh'
      css={{
        // backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
      id="contact">
   
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        // transform="translateX(-25%)"
        p={{ base: 5, lg: 16 }}>
        <Box width='90vw'>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              contactez moi
            </Heading>

            <Stack
          // width='90vw'
            
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
              width={{ base:'90vw', md:'1vw'}}
              
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <FontAwesomeIcon
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    className={styles.icones} icon={faEnvelope}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="#">
                <FontAwesomeIcon
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    className={styles.icones} icon={faFacebook}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <FontAwesomeIcon
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    className={styles.icones} icon={faInstagram}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <FontAwesomeIcon
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    className={styles.icones} icon={faTwitter}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                // bg={useColorModeValue('white', 'gray.700')}
                bgGradient="linear(to-l #999, #454545)"
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="xl"
                
                width={{ base:'90vw', md:'40vw'}}
                >
                
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>

                    <InputGroup>
                      <InputLeftElement  />
                      <Input type="text" name="name" placeholder="Votre nom" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement  />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Votre Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="#454545"
                    width='70%'
                    bg="darkgray"
                    color="white"
                    _hover={{
                      bg: 'lightgray',
                    }}
                    isFullWidth>
                    Envoyer
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
    <Footer></Footer>
      </Layout>
  );
}


// import { Box, Flex, Heading, Input, Text,  } from "@chakra-ui/react";
// import { useState } from "react";
// import Layout from "../components/Layout";


// export default function contact() {
  
//     const [value, setValue] = React.useState('')
//     const handleChange = (event) => setValue(event.target.value)
  
//   return (
//     <Layout>
//     <Flex width="full" align="center" justifyContent="center" >
//       <Box p={2}>
//         <Box textAlign="center" >
//           <Heading position="absolute" top="15vh" transform="translateX(-50%)" >Me contacter</Heading>
//         </Box>
//       </Box>
//     </Flex>
//     <Text mb='8px'>Nom {value}</Text>
//       <Input
//         value={value}
//         onChange={handleChange}
//         placeholder='Votre nom'
//         size='sm'
//       />
      
// </Layout>
//   );
// }







// import Head from "next/head";
//     import { useState } from "react";
//     import Gallery from "../components/ImageDetail";
// import Layout from "../components/Layout";
//     import styles from "../styles/Home.module.css";
//     export default function Home({ stuff }) {
//       const [photos, setPhotos] = useState(stuff);
//       return (
//           <Layout>
//         <div className={styles.container}>
//           <Head>
//             <title>Photo Gallery</title>
//             <link rel="icon" href="/favicon.ico" />
//           </Head>
//           <main className={styles.main}>
//             <div className={styles.fade}>
//               <div className={styles.gridContainer}>
//                 {photos &&
//                   photos.map((detail) => (
//                     <Gallery
//                       key={detail.id}
//                       thumbnailUrl={detail.img.formats.small.url}
//                       title={detail.name}
//                       id={detail.id}
//                     />
//                   ))}
//               </div>
//             </div>
//           </main>
//         </div>
//         </Layout>
//       );
//     }
//     export async function getStaticProps() {
//       const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`);
//       const stuff = await results.json();
//       return {
//         props: { stuff },
//       };
//     }