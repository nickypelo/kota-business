import React from "react";
import { Link } from "react-router-dom";
import '../styles/media.css';


const NavSmall = () => {
    return(
        <nav className="nav-small">
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to = '/contact'>Contact</Link>
                </li>
                <li>
                    <Link to = '/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavSmall;