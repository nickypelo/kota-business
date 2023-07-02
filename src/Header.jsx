import Nav from "./Nav.jsx";
import Cart from "./Cart.jsx";

const Header = () =>{
    return(
        <header className="header">
            <figure className="logo-placeholder">logo</figure>
            <Nav />
            <Cart />
        </header>
    )
}

export default Header;