import { Link } from "react-router-dom";
import '../index.css'

const Nav = () => {
    return(
        <nav className="nav-bar">
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

export default Nav;