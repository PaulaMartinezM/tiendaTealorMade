import { Link } from 'react-router-dom'
import { UseCartContext } from "../context/CartContext";

import Cart from '../img/shopping-cart-16.png'

import './CartWidget.css'

function CartWidget() {
  const { totalProducts } = UseCartContext();

  return (
    <Link to='/cart'>
      <img className='cart' src={Cart} alt='shoppingCart' />
      <span className="cartCounter">{totalProducts !== 0 && totalProducts}</span>
    </Link>
  );
}

export default CartWidget