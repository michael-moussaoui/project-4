import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar({ children, page }) {
    return (
        <div className={styles.navbar}>{children}
            <nav className="navbar flex  float-right pt-10 text-3xl text-gray-dark font-basker" >
                <div className="navbar_logo absolute left-5 text-gray-dark">LOGO</div>
                <ul className="navbar_links flex flex-row mr-10">
                    <li className="navbar_item mx-5" >
                        <Link href="/">
                            <a className="navbar_link {styles.navbar_link}">Accueil</a>
                        </Link>
                    </li>
                    <li className="navbar_item mx-5">
                        <Link href="/galerie">
                            <a className="navbar_link">Galerie</a>
                        </Link>
                    </li>
                    <li className="navbar_item mx-5">
                        <Link href="/tarifs">
                            <a className="navbar_link">Tarifs - Prestations</a>
                        </Link>
                    </li>
                    <li className="navbar_item mx-5">
                        <Link href="/contact">
                            <a className="navbar_link">Contact</a>
                        </Link>
                    </li>
                </ul>
                <button className="navbar_burger"></button>
            </nav>
        </div>
    )
}