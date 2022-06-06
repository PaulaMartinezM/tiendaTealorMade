import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './CartList.css';

export default function CartList({sendOrderManage}) {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            {cartList.map((el) => <CartItem key={el.id} product={el}/>)}
            <p>{`Total Pedido: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={sendOrderManage}>Enviar pedido</button>
        </div>
    );
}