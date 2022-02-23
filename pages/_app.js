// import { ChakraProvider } from '@chakra-ui/react'

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default MyApp

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
