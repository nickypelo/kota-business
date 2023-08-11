import React from "react";
import Nav from "./Nav.jsx";
import NavSmall from "./Nav-small.jsx";
import Cart from "./Cart.jsx";
import { useState } from 'react';
import logo from '/kotalicious_cpt-20220806-0006.jpg';
import { FaShoppingCart, FaYinYang} from "react-icons/fa";
import '../styles/components.css';
import '../styles/media.css';


const Header = () =>{
    const [showCart, setShowCart] = useState(true);
    // const [menu, setMenu] = useState(true);
    // const change = {display : "none"}
    const cartClick = () => {
        console.log(`Cart Activated`);
        setShowCart(!showCart);   
    }

    return(
        <header className="header">
            <figure className="logo-placeholder" >
                <img src={logo} className="logo-image"
                    alt="company_logo"
                    />
            </figure>
            <Nav />
            <section className="header-icons">
                <NavSmall/>
                <FaYinYang onClick={cartClick} className="cart-icon menu-icon"/>
                {showCart ?
                <FaShoppingCart onClick={cartClick} className= "cart-icon" />
                : <Cart kota="The Bae Kota" close={cartClick}
                />}
            </section>
            
        </header>            

    )
}

export default Header;