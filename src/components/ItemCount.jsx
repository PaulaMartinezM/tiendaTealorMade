import React, {useState} from 'react'
import './ItemCount.css'


function ItemCount({stock, initial, onAdd, product, handleInputType}) {
    
    let [quantity, setInitial] = useState(initial);
    
    function clickPlus() {
        if (quantity < stock) {
            setInitial(quantity + 1);
        } 
    }

    function clickLess(){
        if (quantity > 1) {
            setInitial(quantity - 1);
        }
    }
    function addItem(){
        onAdd(quantity, product.name);
        handleInputType();
    }

  return (
      <>
      <div className='itemAdd'>
      <button onClick={clickLess}>-</button>
      <span className='itemCount'>{quantity}</span>
      <button onClick={clickPlus}>+</button> 
      <br/>
      <button onClick={addItem} >Agregar al carrito</button>
      </div>
      
      </>
    
  )
}

export default ItemCount