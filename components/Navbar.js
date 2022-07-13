import Link from "next/link";
import { useRouter } from 'next/router'
import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"





const links = [
    {name:'Accueil',path:"/"},
    {name:'Galerie',path:"/galerie"},
    {name:'Tarifs - Prestations',path:"/tarifs"},
    {name:'Contact',path:"/contact"}
]

    const Navbar = (({  children }) => {

    const router = useRouter()

    const [open, setOpen] = useState (false)
    const [navBg, setNavBg] = useState(false)

    const changeNavBg = () => {
        console.log(window.scrollY);
       
        if(window.scrollY >= 50) {
            setNavBg(true)
        } else {
            setNavBg(false)
        }
    }

    
    useEffect(() => {

        document.addEventListener('scroll', changeNavBg)
         return () => {
             window.removeEventListener('scroll', changeNavBg)
         }
         
    }, [])

    return (
        <>
             <div className={navBg ?  styles.navbar_ : styles.navbar} >{children}
            <nav  className={` flex   md:float-right sm:float-left text-white font-basker  md:h-16 sm:h-screen sm:w-2/5  md:w-auto `} >
            <Link href = {"/"} passHref>
                <div className="navbar_logo absolute left-5 mt-2 cursor-pointer ">
                <Image src="./charles cantin.png" className=" lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14" alt=""/> 
                </div>
                </Link>
                {/*Mobile menu */}
                <div onClick={()=>setOpen(!open)}
                 className="absolute float right-6 top-5 w-10 h-10  md:hidden text-2xl text-white cursor-pointer z-50  ">
                <FontAwesomeIcon icon={open ? faXmark : faBars} /> 
                </div> 
                <ul className={`navbar_links flex md:flex-row mr-10 sm:flex-col sm:absolute md:left-1/2 sm:-translate-x-1/2 sm:content-center   md:mt-10  md:inline-flex md:-translate-y-10 w-3/4 mx-auto transition-all duration-1000 ease-in ${open ? 'sm:bg-pink  sm:h-screen sm:w-full sm:z-20 sm:left-1/2 sm:mb-0':' md:bg-transparent sm:h-screen md:h-[100%]  sm:left-[-35rem] sm:mb-40'}`}>
                { links.map((link) => (
                    
                    <li  
                     key={link.name}
                     className={styles.navbar_item} >
                        <Link  href={link.path} passHref>
                            <a className={`cursor-pointer ${
                router.pathname === link.path
                  ? ' text-pink bg-black bg-opacity-50  p-1 rounded-lg'
                  : ' hover:scale-50 hover: text-white'
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
})
 export default Navbar