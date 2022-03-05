import Layout from "../components/Layout"
// import styles from "../components/cardTarifs.css"
// import Navbar from "../components/Navbar";
// import Navbar from "../components/NavbarHome";

import { Container,
    chakra,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    Icon,
    useColorModeValue,
    UnorderedList,
    ListItem, 
    StylesProvider} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import chakraUiCssReset from "@chakra-ui/css-reset";
// import chakraUiTheme from "@chakra-ui/theme";


import { ChakraProvider } from "@chakra-ui/provider";
import Footer from "../components/Footer";

export default function tarifs(){
    return(
        <Layout>
        <ChakraProvider>
     <h1 className="  font-basker lg:text-5xl md:text-5xl sm:text-2xl xs:text-base text-center  text-slate-light absolute md:top-28  sm:top-16 left-1/2 -translate-x-1/2 xs:hidden md:block  sm:w-52  md:w-10/12 ">Tarifs - Prestations</h1>
     <Grid 
    //  height="150vh"  
    //  width="100vw" 
    w='full'
    minHeight='150vh'
    templateColumns={{lg:'repeat(3, 1fr)', md: 'repeat(2,1fr)', sm:'repeat(1, 1fr)'}}  
    gap={50}
    pt={300} 
    // pt={{lg:'300', md:'60', sm:'52'}}
    //  bgGradient="linear(to-r,#454545, #999)"
    bgImage= 'url(./camera.jpg)'
    bgRepeat = 'no-repeat'
    bgPosition = 'center center'
    bgAttachment = 'fixed'
    bgSize = 'cover'
    color= 'lightgray'
    pb={125}
     
     >
  <GridItem 
  mx='14'  
  w='70%' 
  h='300'
  // mx={{lg:'14', md:'12' }} 
  // w={{lg:'70%', md:'80%', sm:'90%'}} 
  // h={{lg:'300',md:'300', sm:'200px'}}
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  _hover={{ bgImage :"url(./male-2322802_640.jpg)",
  bgAttachment:"center",
    bgSize: "cover"}}
  cursor= 'pointer'    >
  
  <chakra.h3
                  py={140}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1} >
                  Juste moi
                </chakra.h3>
                
                    <chakra.span
                    fontWeight="bold"
                    color='lightgray'>           
                    130 Euros
                    </chakra.span>
  </GridItem>
  <GridItem 
  mx='14'  
  w='70%' 
  h='300'
  // mx={{lg:'14', md:'12' }} 
  // w={{lg:'70%', md:'80%', sm:'90%'}} 
  // h={{lg:'300',md:'300', sm:'200px'}}
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  _hover={{ bgImage :"url(./black-and-white-2590810_640.jpg)",
  bgAttachment:"center",
    bgSize: "cover"
  }}
  cursor= 'pointer' >
  <chakra.h3
                  py={140}
                  textAlign="center"

                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Pour deux
                </chakra.h3>
  <chakra.span
                    fontWeight="bold"
                    color='lightgray'
                  >
                    195 Euros
                    </chakra.span>
  </GridItem>
  <GridItem 
  mx='14'  
  w='70%' 
  h='300'
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  _hover={{ bgImage :"url(./family-6475821_640.jpg)",
  bgAttachment:"center",
    bgSize: "cover"
  }}
  cursor= 'pointer'   >
  <chakra.h3
                  py={140}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Famille
                </chakra.h3>
  <chakra.span
                    fontWeight="bold"
                    color='lightgray'
                  >
                    220 Euros
                    </chakra.span>
  </GridItem>
  <GridItem 
  mx='14'  
  w='70%' 
  h='300' 
  transition='ease-in'
  transitionDuration='300'
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  cursor= 'pointer'
  _hover={{ bgImage :"url(./baptism-4598749_640.jpg)",
  bgAttachment:"center",
    bgSize: "cover"}}
   
   >
  <chakra.h3
                  py={140}
                  textAlign="center"

                  fontWeight="bold"
                  textTransform="uppercase"
                  color='lightgray'
                  letterSpacing={1}
                >
                  Il etait une fois
                </chakra.h3>
  <chakra.span
                    fontWeight="bold"
                    color="lightgray"
                  >
                    160 Euros
                    </chakra.span>
  </GridItem>
  <GridItem 
  mx='14'  
  w='70%' 
  h='300'  
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  _hover={
    { bgImage :"url(./bebe-1237704_640.jpg)",
    bgAttachment:"center",
    bgSize: "cover"
    }}
  cursor= 'pointer' >
  <chakra.h3
                  py={140}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Mon bébé
                </chakra.h3>
  <chakra.span
                    fontWeight="bold"
                    color='lightgray'
                  >
                    100 Euros
                    </chakra.span>
  </GridItem>
  <GridItem 
  mx='14'  
  w='70%' 
  h='300'  
  bg= 'rgba(0,0,0,0.6)'
  boxShadow = '0 3px 8px lightgray'
  _hover={{ bgImage :"url(./couple-1850073_640.jpg)"}}
  cursor= 'pointer' >
  <chakra.h3
                  py={140}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  {`J'immortalise l'évènement`}
                </chakra.h3>
  <chakra.span
                    fontWeight="bold"
                    color='lightgray'
                  >
                    130 Euros
                    </chakra.span>
  </GridItem>
</Grid>
<Footer />
 
          {/* <Flex
            bgGradient="linear(to-r,#454545, #999)"
            pt={40}
            // w="full"
            h="100vh"
            alignItems="center"
            justifyContent="center"
            
          >
            <Flex
              // direction="column"
              direction="row"
              justifyContent="center"
              alignItems="center"
              // w="sm"
              mx="auto"
              bg="green"            
            >
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Juste moi
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    130 Euros
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Pour deux
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    195 Euros
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Famille
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    220 Euros
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Il etait une fois
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    160 Euros
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  Mon bébé
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    100 Euros
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
                }}
              >   
              </Box>
      
              <Box
                w={{ base: 56, md: 64 }}
                bg={ "gray.800"}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={ "white"}
                  letterSpacing={1}
                >
                  J’immortalise l’événement
                </chakra.h3>
      
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg={"gray.200"}
                >
                  <chakra.span
                    fontWeight="bold"
                    color={"gray.800"}
                  >
                    Sur mesure
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: ("gray.700", "gray.600"),
                    }}
                    _focus={{
                      bg: ("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
            </Flex>
            
          </Flex> */}
           {/* <Footer/> */}
           </ChakraProvider>
           
           </Layout>
           
      
    )}  

