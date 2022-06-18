import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import CartList from "./CartList"

import './Cart.css';

export default function Cart() {
    const { orderId, createOrder, totalProducts } = UseCartContext();
    const [orderSent, setOrderSent] = useState(false);

    function sendOrderManage(customerData) {
        setOrderSent(true);
        createOrder(customerData);
    }

    if (!totalProducts) {
        return (
            <div>
                {orderSent ? <h1>Compra enviada! Nro de Pedido: {orderId}</h1> : <h1>Tu carrito está vacío, aprovechá a ver nuestros productos!</h1>}

                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1>Su pedido:</h1>
            <CartList sendOrderManage={sendOrderManage} />
        </div>
    );
}