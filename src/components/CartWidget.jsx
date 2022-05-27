import React from 'react'
import './CartWidget.css'
import Cart from '../img/shopping-cart-16.png'
import { Link } from 'react-router-dom'
import { UseCartContext} from "../context/CartContext";

function CartWidget() {
  const {totalProducts} = UseCartContext();

  return (
    <Link to='/cart'>
      <img className='cart' src={Cart} alt='shoppingCart'/>
      <span className="cartCounter">{totalProducts}</span>
    </Link>
  );
}

export default CartWidget