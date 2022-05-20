import React from 'react'
import './CartWidget.css'
import Cart from '../img/shopping-cart-16.png'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to='/cart'>
      <img className='cart' src={Cart} alt='shoppingCart'/>
    </Link>
  );
}

export default CartWidget