import './NavBar.css';
import brand from '../img/logoTealorMade.jpg'


function NavBar() {

    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={brand} alt="logo" />

                <h1>TEALOR MADE BLENDS</h1>
            </div>

        <nav>
            <ul className="nav-container">
                <li>
                    <a href="/">INICIO</a>
                </li>
                <li>
                    <a href="/">QUIENES SOMOS</a>
                </li>
                <li>
                    <a href="/">MUNDO TEALOR</a>
                </li>
                <li>
                    <a href="/">PRODUCTOS</a>
                </li>
                <li>
                    <a href="/">CONTACTO</a>
                </li>
            </ul>
        </nav>

        </header>
    )
}

export default NavBar