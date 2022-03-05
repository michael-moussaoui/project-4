import { position } from "@chakra-ui/react"
import Image from "next/image"
export default function GridGallery({ images }) {
    return ( 
    <div className=" grid-cols-3 grid-rows-2 gap-4 ">
        {images && 
        images.map((imageUrl) => (
            <div 
            key={imageUrl}
            className="relative">
            <div className ="absolute inset-8 z-10 flex transition duration-200 ease-in hover:opacity-0">
            <div className="absolute inset-8 bg-dark opacity-70"></div>
            <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                Photos
            </div>
            </div>
            <img src={imageUrl} alt=''/>
        
        {/* <Image 
        key={imageUrl} 
        src={imageUrl}
        width="500px"
        height="500px" 
        // layout="fill"
        // objectFit="fill"
        // objectPosition="center"
        
        alt="" /> */}
  
    </div> 
        ))}
        </div>
    )
    }
