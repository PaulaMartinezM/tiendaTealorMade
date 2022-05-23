import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../getFetch";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
    
    const {id} = useParams();
   

    useEffect(() => {
        
            getFetch(id)
            .then(response => setProduct(response))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

    
    },[id]);


  return (
    <div className="loading">
        {loader ? 
        <h3>Cargando...</h3> : 
        <ItemDetail product={product}/>}
    </div>
  );
}

export default ItemDetailContainer