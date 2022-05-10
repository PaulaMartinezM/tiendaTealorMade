import React from 'react'

import Item from "./Item";
import './ItemList.css';


function ItemList({prods}) {
  return (
    <div>
        {prods.map((element)=><Item key={element.id} name={element.name} variety={element.variety} price={element.price} category={element.category} img={element.img}/>)}
    </div>
  )
}

export default ItemList