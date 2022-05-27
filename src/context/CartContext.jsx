import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    
    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }

    function addToCart(product) {
        if (isInCart(product.id)) {
            let i = cartList.findIndex(el => el.id === product.id);
            const newCartList = cartList;
            newCartList[i].quantity += product.quantity;
            updateCart(newCartList);
        } else {
            updateCart([...cartList, product]);
        }
    }

    function clearCart() {
        updateCart([]);
        setTotalPrice(0);
    }

    function clearProduct(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        updateCart(newCartList);
    }
    
    function updateCart(array) {
        setCartList(array);
        setTotalPrice(array
            .map(current => current.quantity*current.price)
            .reduce((acc,current) => acc+current,0)
        );
        setTotalProducts(array
            .map(current => current.quantity)
            .reduce((acc,current) => acc+current,0)
        );
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            clearProduct,
            totalPrice,
            totalProducts
        }}>
            {children}
        </cartContext.Provider>
    );
}