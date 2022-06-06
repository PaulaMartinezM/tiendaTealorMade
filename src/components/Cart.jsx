import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import CartList from "./CartList"
import { useState } from "react";

export default function Cart() {
    const {orderId, createOrder, totalProducts} = UseCartContext();
    const [orderSent, setOrderSent] = useState(false);

    function sendOrderManage(){
        setOrderSent(true);
        createOrder();
    }
    
    if (!totalProducts) {
        return (
            <div>
                {orderSent ? <h1>Compra enviada! Nro de Pedido: {orderId}</h1> : <h1>Su carrito está vacío</h1>}
                
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1>Su pedido:</h1>
            <CartList sendOrderManage={sendOrderManage}/>
        </div>
    );
}