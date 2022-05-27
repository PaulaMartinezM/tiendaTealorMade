import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import CartItem from "./CartItem";

export default function Cart() {
    const {cartList, clearCart, totalPrice, totalProducts} = UseCartContext();
    
    if (!totalProducts) {
        return (
            <div>
                <h2>Su carrito está vacío</h2>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1>Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} product={el}/>)}
            <p>{`Total de su compra: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}