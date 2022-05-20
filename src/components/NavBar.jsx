import { Link } from 'react-router-dom';
import './NavBar.css';
import brand from '../img/logoTealorMade.jpg'
import CartWidget from './CartWidget';


function NavBar() {

    return (
        <header className='header'>
            <Link to='/' className='logo-container'>
                <img src={brand} alt="logo" />
            </Link>
        <nav>
            <ul className="nav-container">
                <Link to='/'>
                <li id='name'>TEALOR MADE BLENDS</li>
                </Link>
                <Link to='/category/Te'>
                <li id='te'>Té</li>
                </Link>
                <Link to='/category/Yerba Mate'>
                <li id='yerba'>Yerba Mate</li>
                </Link>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>

        </header>
    );
}

export default NavBar