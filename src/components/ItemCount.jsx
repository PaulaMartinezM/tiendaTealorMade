import React, {useState} from 'react'
import './ItemCount.css'


function ItemCount({stock, initial, onAdd}) {
    
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
   

  return (
      <>
      <div className='title'>Producto seleccionado</div>
      <div className='itemAdd'>
      <button onClick={clickLess}>-</button>
      <span className='itemCount'>{quantity}</span>
      <button onClick={clickPlus}>+</button> 
      <br/>
      <button onClick={onAdd} >Agregar al carrito</button>
      </div>
      
      </>
    
  )
}

export default ItemCount