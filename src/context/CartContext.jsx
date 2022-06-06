import { async } from "@firebase/util";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [orderId, setOrderId] = useState();
    
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

    function createOrder() {
        let order = {};

        order.buyer = {name: 'Pau', email:'martinezmpaula@gmail.com', phone:'1150394012'};
        order.total = totalPrice;
        order.items = cartList.map(item =>{
            const id = item.id;
            const name = item.name;
            const quantity = item.quantity;
            const newStock = item.stock-item.quantity;
            const price = item.price*item.quantity;
            return {id, name, quantity, newStock, price}
        });

        async function updateStock() {
            const queryCollectionStocks = collection (db, 'items');
            const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
            const batch = writeBatch(db);

            await getDocs(queryUpdateStocks)
            .then(resp => resp.docs.forEach(
                res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
            ))
            .catch(err => console.log(err))

            batch.commit()
        }
        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderId(resp.id))
        .then(() => updateStock())
        .catch(err => console.log(err))
        .finally(() => clearCart())
    };

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            clearProduct,
            totalPrice,
            totalProducts,
            orderId,
            createOrder
        }}>
            {children}
        </cartContext.Provider>
    );
}