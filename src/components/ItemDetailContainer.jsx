import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../getFetch";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import React from 'react'

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
        
    const {id} = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id])

//    useEffect(() => {
        
//            getFetch(id)
//            .then(response => setProduct(response))
//            .catch(err => console.log(err))
//            .finally(() => setLoader(false))

//    },[id]);


  return (
    <div className="loading">
        {loader ? 
        <h3>Cargando...</h3> : 
        <ItemDetail product={product}/>}
    </div>
  );
}
