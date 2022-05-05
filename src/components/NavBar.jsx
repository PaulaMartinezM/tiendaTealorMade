import './NavBar.css';
import brand from '../img/logoTealorMade.jpg'
import CartWidget from './CartWidget';


function NavBar() {

    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={brand} alt="logo" />
            </div>
                

        <nav>
            <ul className="nav-container">
                <li>
                    <a id='name' href="/">TEALOR MADE BLENDS</a>
                </li>
                <li>
                    <a href="/">TÉ</a>
                </li>
                <li>
                    <a href="/">YERBA MATE</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>

        </header>
    )
}

export default NavBar