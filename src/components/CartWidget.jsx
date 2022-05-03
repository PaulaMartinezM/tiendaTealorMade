import React from 'react'
import './CartWidget.css'
import Cart from '../img/shopping-cart-16.png'

function CartWidget() {
  return (
    <img className='cart' src={Cart} alt='shoppingCart'/>
  )
}

export default CartWidget