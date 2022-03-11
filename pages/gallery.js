import React from 'react'
import { useState, useEffect } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {buildUrl} from 'cloudinary-build-url'
import Image from 'next/image';
import { search, mapImageResources } from '../lib/cloudinary'


import { image } from '@cloudinary/url-gen/qualifiers/source';



export default function gallery  (images)  {

  // useEffect(() => {
  //   (async function run (){
  //     const results = await fetch ('/api/search'),{
  //       method:'POST'.
  //       body:'JSON'
  //     }).then(r => r.json())
  //   })()

  // }, [])
  

  // const url = buildUrl('human-3782189_640_a47cho', {
  //   cloud: {
  //     cloudName:'da2ju2dod'
  //   }
  // })


  
     return (
      <div className="w-96 h-96">            
      <main className="">
          <h1 className="">Blurred image placeholder</h1>
          <h2 className="">with Next.js image and cloudinary</h2>
          <div className="">
              <Image
                  src={url}
                  alt=""
                  width="96"
                  height="96"
                  layout='responsive'
                  
                  
                                          
              />
          </div>
      </main>
  </div>
     )
}
export async function getStaticProps(){
  const results = await search()

  const { resources} = results

  
  

  const images = mapImageResources(resources)
  
  // const images = resources.map(resources => {
  //   const {width, height } = resources
  //   return {
  //     id :resources.asset_id,
  //     title : resources.public,
  //     image: resources.secure_url,
  //     width,
  //     height
  //   }
  // })
  return {
    props: {
      images : images || false
    }
  }
}