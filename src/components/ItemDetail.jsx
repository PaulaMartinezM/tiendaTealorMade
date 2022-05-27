
import { useState } from 'react';
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"
import BuyButtons from "./BuyButtons"
import './ItemDetail.css'



const ItemDetail = ({ product }) => {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({...product, quantity})
    }
    function handleInputType(){
        setInputType('buyButtons');
    }

    return (
        <div className='itemDetail'>
                <img className='itemDetailImg' src={product.img} alt="te" />
            <div className="col">
                <div className='itemDetailComplete'>
                    <div className='itemInformation'>
                        <h3 className='itemName'>{product.name}</h3>
                        <div>
                            <span>{`Categoría: ${product.category}`}</span>
                            <br />
                            <span>{`Variedad: ${product.variety}`}</span>
                            <br />
                            <span>{`Precio: ${product.price}`}</span>
                        </div>
                        <br/>
                        {inputType === 'itemCount' ?
                            <ItemCount product={product} initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
                            <BuyButtons/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail