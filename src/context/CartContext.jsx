import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(product) {
        if (isInCart(product.id)) {
            let i = cartList.findIndex(el => el.id === product.id);
            const newCartList = cartList;
            newCartList[i].quantity += product.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                product]);
        }
    }
    function clearCart() {
        setCartList([]);
    }
    

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    );
}