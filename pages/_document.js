import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        let pageProps = null;

        
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, pageProps }
    }

    render() {
        const { pageProps } = this.props;
        
        console.log("This is my page props:");
        console.log(pageProps);

        return (
            <Html lang='fr'>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument