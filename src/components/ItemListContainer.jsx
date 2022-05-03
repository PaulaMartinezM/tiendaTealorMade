import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({ greeting = 'Hola'}) {
  return (
    <>
        <h1 className="title">{ greeting }</h1>
    </>
  )
}

export default ItemListContainer