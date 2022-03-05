import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Site web du photographe Charles CANTIN." />  
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