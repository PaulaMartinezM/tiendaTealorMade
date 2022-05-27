import React from 'react'

import Item from "./Item";
import './ItemList.css';


function ItemList({products, id}) {
  return (
    <div className='cardPosition'>
        {id ?
        products.filter(el => el.category === id).map((el)=><Item key={el.id} el={el}/>):
        products.map((el) => <Item key={el.id} el={el}/>)
        }
    </div>
  )
}

export default ItemList