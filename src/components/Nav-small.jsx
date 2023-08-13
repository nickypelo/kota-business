import React from "react";
import { Link } from "react-router-dom";
import {FaWindowClose} from 'react-icons/fa';
import '../styles/media.css';

const NavSmall = ({close}) => {
    return(
        <nav className="nav-small">
            <section className="nav-small-header">
                <figure></figure>
                <FaWindowClose classname='close' onClick={close} />
            </section>
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
            <p>Copyright &copy;</p>
        </nav>
    )
}

export default NavSmall;