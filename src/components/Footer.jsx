import React from "react";
import {Link} from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import '../styles/components.css';
import '../styles/media.css';
import Header from './Header';

const Footer = () => {

    const date = new Date()

    return(
        <footer className="footer">
            <section className="company-address">
                <address>
                    <h3>Find us!</h3>
                    <p>2 Meadow Road</p>
                    <p>Rosebank</p>
                    <p>1431</p>
                </address>
                <Link to="https://www.instagram.com" target="_blank"><FaInstagram className="instagram-icon social"/></Link>
                <Link to="tel:+27746272912" target="-blank"><FaWhatsapp className="whatsapp-icon social"/></Link>
            </section>
            <section className="company-section">
                <figure>
                    <img src="public/kotalicious_cpt-20220806-0006.jpg" alt="logo"
                        width="200"
                    />
                </figure>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <p>Copyright &copy; {date.getFullYear()}</p>
            </section>
        </footer>
    )
}

export default Footer;
