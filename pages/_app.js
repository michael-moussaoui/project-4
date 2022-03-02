import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
     <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
