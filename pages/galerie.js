import Link from "next/link";
import Image from "next/image";
import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
import {
			 AdvancedImage,
			 accessibility,
			 responsive,
			 lazyload,
			 placeholder
			} from '@cloudinary/react';
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Flex, Box } from "@chakra-ui/react";


export default function galerie({ images }) {
    
    return (
    <Layout>
    <Flex 
	height="150vh" 
  width="100vw" 
	bgImage="url(./pexels-mengliu-di-3679525.jpg)"
  bgRepeat = 'no-repeat'
  bgPosition = 'center center'
  bgAttachment = 'fixed'
  bgSize = 'cover'
  color= 'lightgray'
  
	overflowX="hidden">
    <h1 className=" text-7xl font-basker  absolute top-28 left-1/2 text-gray-dark -translate-x-1/2">Galerie</h1>
	

        <ul >
          {images?.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div >
                    <Image width={image.width} height={image.height} src={image.image} alt="" />
                  </div>
                  <h3 className={styles.imageTitle}>
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>

    <Footer m="5vh"/>
	</Flex>
	
    </Layout>
    
	)
}



