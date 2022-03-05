import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar({ children, page }) {
    return (
        <div className={styles.navbar}>{children}
            <nav className="navbar flex   md:float-right sm:float-left   lg:text-3xl text-slate-light font-basker md:text-xl h-16 sm:w-2/5 md:w-auto " >
                <div className="navbar_logo absolute left-5 mt-2  text-lightgray ">LOGO</div>
                <ul className="navbar_links flex md:flex-row mr-10 sm:flex-col sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:content-center sm:-translate-y-5  sm:mt-10  md:inline-flex md:-translate-y-10 w-3/4 mx-auto  ">
                    <li className={styles.navbar_item} >
                        <Link href="/">
                            <a className="navbar_link">Accueil</a>
                        </Link>
                    </li>
                    <li className= {styles.navbar_item}>
                        <Link href="/galerie">
                            <a className="navbar_link">Galerie</a>
                        </Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link href="/tarifs">
                            <a className="navbar_link">Tarifs - Prestations</a>
                        </Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link href="/contact">
                            <a className="navbar_link">Contact</a>
                        </Link>
                    </li>
                </ul>
                <button className="navbar_burger flex absolute float right-6 top-5 w-10 h-10  md:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </nav>
        </div>
    )
}