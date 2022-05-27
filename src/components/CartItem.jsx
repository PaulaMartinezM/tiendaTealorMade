import { UseCartContext } from "../context/CartContext";
import './CartItem.css';



export default function CartItem({product}) {
    const {clearProduct} = UseCartContext();

    function removeItem() {
        clearProduct(product.id)
    }
    
    return (
        <li>Producto: {product.name} - Precio: ${product.price} - Cantidad: {product.quantity} - <span className="cartRemove" onClick={removeItem}>Eliminar</span></li>
    );
}