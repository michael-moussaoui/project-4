import Head from 'next/head'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css" 
import { config } from "@fortawesome/fontawesome-svg-core"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'
import { FormspreeProvider } from '@formspree/react'


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  return (
  <>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AnimatePresence exitBeforeEnter initial={false} >
      <ChakraProvider>
        {/* <FormspreeProvider project="{FormulaireCantin}"> */}
           <Component key={router.route} {...pageProps} />
        {/* </FormspreeProvider> */}
      </ChakraProvider>
    </AnimatePresence>
    </>
  )
}

export default MyApp
