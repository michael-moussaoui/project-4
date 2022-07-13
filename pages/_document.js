
import { Html, Head, Main, NextScript } from 'next/document'
// import Favicon from '../components/Favicon'


export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <meta name="description" content="Site web du photographe Charles CANTIN." />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      {/* <Favicon/>  */}
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"></link>
                    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}