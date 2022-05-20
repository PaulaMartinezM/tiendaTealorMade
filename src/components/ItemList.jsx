import React from 'react'

import Item from "./Item";
import './ItemList.css';


function ItemList({items, id}) {
  return (
    <div className='cardPosition'>
        {id ?
        items.filter(el => el.category === id).map((el)=><Item key={el.id} el={el}/>):
        items.map((el) => <Item key={el.id} el={el}/>)
        }
    </div>
  )
}

export default ItemList