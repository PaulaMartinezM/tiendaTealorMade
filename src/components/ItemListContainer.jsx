import React from 'react';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';



const products = [ 
  { id: 1, name: "Puerh", variety: "Rojo", price: 550, category: "Te", img: "./tePuerh.png" },
  { id: 2, name: "Earl Grey", variety: "Negro", price: 600, category: "Te", img: "./teEarlGrey.png" },
  { id: 3, name: "Antonieta", variety: "Negro", price: 400, category: "Te", img: "./teAntonieta.png" },
  { id: 4, name: "Frutos del Bosque", variety: "Negro", price: 400, category: "Te", img: "./teFrutosDelBosque.png" },
  { id: 5, name: "Chai", variety: "Negro", price: 400, category: "Te", img: "./teChai.png" },
  { id: 6, name: "Verde Miel", variety: "Verde", price: 400, category: "Te", img: "./teVerdeMiel.png" },
  { id: 7, name: "Verde Frutal", variety: "Verde", price: 400, category: "Te", img: "./teVerdeFrutal.png" },
  { id: 8, name: "Verde Citrico", variety: "Verde", price: 400, category: "Te", img: "./teVerdeCitrico.png" },
  { id: 9, name: "Mix Serrano", variety: "Hierbas", price: 200, category: "Yerba Mate", img: "./yerbaMixSerrano.png" },
  { id: 10, name: "Frutos Rojos", variety: "Frutos", price: 200, category: "Yerba Mate", img: "./yerbaFrutosRojos.png" },
];

const getFetch = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve (products);
  }, 2000)
})

function ItemListContainer({ greeting = 'Hola'}) {
  const [prods, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
    .then (answer => setProducts(answer))
    .catch ((err) => console.log(err))
    .finally (() => setLoading(false))
  },[]);

  return (
    <div>
        <h1 className="title">{ greeting }</h1>
        {loading ?
        <h2 className='loading'>Cargando...</h2>
        :
        <ItemList prods={prods}/>
        }
    </div>
  )
}

export default ItemListContainer