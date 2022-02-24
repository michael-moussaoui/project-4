import Navbar from "../components/Navbar"
import styles from "./layout.module.css"
import Head from "next/head"

import React from 'react'


export default function Layout( {children , page}) {
  return (
    <html> 
            <Head>
                <title>{page}</title>

            </Head>
            <body className={styles.container}>
                <header>
                    <Navbar />

                </header>
            </body>
        </html>

    )
}
  


