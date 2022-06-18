import React, { useEffect, useState } from 'react'

import './ItemCount.css'

function ItemCount({ stock, initial, onAdd, product, handleInputType }) {

    let [quantity, setInitial] = useState(initial);

    function clickPlus() {
        if (quantity < stock) {
            setInitial(quantity + 1);
        }
    }

    function clickLess() {
        if (quantity > 1) {
            setInitial(quantity - 1);
        }
    }
    function addItem() {
        onAdd(quantity, product.name);
        handleInputType();
    }


    useEffect(() => {
        stock <= 0 ? setInitial(0) : setInitial(1);
    }, [stock]);

    return (
        <>
            <div className='itemAdd'>
                <button onClick={clickLess} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}>-</button>
                <span className='itemCount' style={{ opacity: stock <= 0 && '0.5' }}>{quantity}</span>
                <button onClick={clickPlus} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}>+</button>
                <br />
                <button onClick={addItem} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}>Agregar al carrito</button>
            </div>

        </>

    )
}

export default ItemCount