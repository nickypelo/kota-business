import Nav from "./Nav.jsx";
import Cart from "./Cart.jsx";
import {useState} from 'react';
import logo from '/kotalicious_cpt-20220806-0006.jpg';
import '../styles/components.css';


const Header = () =>{
    const [showCart, setShowCart] = useState(true);

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
            {showCart ? <p className= "cart-icon" onClick={cartClick}>
                cart
            </p>
            : <Cart kota="The Bae Kota" close={cartClick}
            />}
        </header>
    )
}

export default Header;