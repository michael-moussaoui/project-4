import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion";



export default function Navbar({ children, page }) {
    let links = [
        {name:'Accueil',link:"/"},
        {name:'Galerie',link:"/galerie"},
        {name:'Tarifs - Prestations',link:"/tarifs"},
        {name:'Contact',link:"/contact"}
    ]

    let [open, setOpen] = useState (false)

    return (
        <>
        <div className={styles.navbar}>{children}
            <nav className="navbar flex   md:float-right sm:float-left    text-slate-light font-basker  h-16 sm:w-2/5 md:w-auto " >
            <Link href = {"/"}>
                <div className="navbar_logo absolute left-5 mt-2  text-lightgray cursor-pointer ">
                <img src="./charles cantin.png" className=" lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-16 sm:h-16"/> 
                </div>
                </Link>
                <div onClick={()=>setOpen(!open)}
                 className="absolute float right-6 top-5 w-10 h-10  md:hidden text-2xl text-white cursor-pointer">
                <FontAwesomeIcon icon={open ? faXmark : faBars} /> 
                </div> 
                <ul className={`navbar_links flex md:flex-row mr-10 sm:flex-col sm:absolute md:left-1/2 sm:-translate-x-1/2 sm:content-center sm:-translate-y-5  sm:mt-10  md:inline-flex md:-translate-y-10 w-3/4 mx-auto transition-all duration-1000 ease-in ${open ? ' sm:left-1/2 sm:mb-0':' sm:-left-96 sm:mb-40'}`}>
                { links.map((link) => (
                    
                    <li
                     key={link}
                     className={styles.navbar_item} >
                        <Link href={link.link}>
                            <a className="navbar_link">{link.name}</a>
                        </Link>
                    </li>
                    ))
                }
                </ul>
            </nav>
        </div>
        </>
    )
}
