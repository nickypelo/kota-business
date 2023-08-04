import Nav from "./Nav.jsx";
import Cart from "../pages/Cart.jsx";


const Header = () =>{
    return(
        <header className="header">
            <figure className="logo-placeholder">logo</figure>
            <section>
                <Nav />
                <figure className="cartLogo-placeholder">Cart-icon</figure>
            </section>
            

            {/* <Cart /> */}
        </header>
    )
}

export default Header;