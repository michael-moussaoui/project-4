import Link from "next/link";
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
import { image } from "@cloudinary/url-gen/qualifiers/source";
// import { search, mapImageResources } from '../lib/cloudinary'
import Image from "next/image";


export default function galerie({ images }) {
    
    
        
    <Layout>
    <Flex
	bgGradient="linear(to-r,#454545, #999)">
    <h1 className="font-marck text-7xl absolute top-28 left-1/2 text-gray-dark -translate-x-1/2">Galerie</h1>
	<Box
        borderRadius="lg"
		height="100vh"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
		
        </Box>
		{images.map(image => {
			return(
		{/* <Image 
		width={image.width} 
		height={image.height} 
		src={image.image} 
		alt=''/> */}
			)
			})}

    <Footer/>
	</Flex>
	
    </Layout>
    

}

export async function getStaticProps() {
	const params = {
		expression: 'folder=""'
	  }
	  
	const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
	const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
  headers: {
    Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`

  }
}).then(r => r.json());
const { resources } = results

const images = resources?.map (resource => {
  const { width, height } = resource
  return {
    id: resource.asset_id,
    title: resource.public_id,
    image: resource.secure_url,
    width,
    height
  }
})
	return {
	  props: {
		  images,
		  
		  
  
	  }
	}
  }

