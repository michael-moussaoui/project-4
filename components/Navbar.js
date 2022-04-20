import Link from "next/link";
import { useRouter } from 'next/router'
import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion";



const links = [
    {name:'Accueil',path:"/"},
    {name:'Galerie',path:"/galerie"},
    {name:'Tarifs - Prestations',path:"/tarifs"},
    {name:'Contact',path:"/contact"}
]

export default function Navbar({ children, page }) {

    const router = useRouter()

    let [open, setOpen] = useState (false)

    return (
        <>
        <div className={styles.navbar}>{children}
            <nav className="navbar flex   md:float-right sm:float-left text-slate-light font-basker  h-16 sm:w-2/5  md:w-auto " >
            <Link href = {"/"} passHref>
                <div className="navbar_logo absolute left-5 mt-2  text-lightgray cursor-pointer ">
                <Image src="./charles cantin.png" className=" lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-16 sm:h-16" alt=""/> 
                </div>
                </Link>
                {/*Mobile menu */}
                <div onClick={()=>setOpen(!open)}
                 className="absolute float right-6 top-5 w-10 h-10  md:hidden text-2xl text-white cursor-pointer z-20 ">
                <FontAwesomeIcon icon={open ? faXmark : faBars} /> 
                </div> 
                <ul className={`navbar_links flex md:flex-row mr-10 sm:flex-col sm:absolute md:left-1/2 sm:-translate-x-1/2 sm:content-center   md:mt-10  md:inline-flex md:-translate-y-10 w-3/4 mx-auto transition-all duration-1000 ease-in ${open ? 'sm:bg-pink sm:w-full sm:left-1/2 sm:mb-0':' md:bg-transparent  sm:left-[-35rem] sm:mb-40'}`}>
                { links.map((link) => (
                    
                    <li
                     key={link.name}
                     className={styles.navbar_item} >
                        <Link  href={link.path} passHref>
                            <a className={`cursor-pointer ${
                router.pathname === link.path
                  ? ' text-pink bg-black bg-opacity-50 p-1 rounded-lg'
                  : ' hover:scale-50 hover: text-gray-light'
              }`}>{link.name}</a>
                        </Link>
                    </li>
                    ))
                }
                </ul>
                <div className={styles.icones}>
                <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}></FontAwesomeIcon>
                <FontAwesomeIcon className={styles.twitter} icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon className={styles.instagram} icon={faInstagram}></FontAwesomeIcon>
                </div>
            </nav>
        </div>
        </>
    )
}
