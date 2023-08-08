import React from "react";
import {Link} from "react-router-dom";
import '../styles/components.css';


const Footer = () => {
    return(
        <ul>
            <li>
                <Link to ='/'>Home</Link>
            </li>
        </ul>
    )
}

export default Footer;
