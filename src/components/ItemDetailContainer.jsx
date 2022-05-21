import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../getFetch";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
    const [quantityToAdd, setQuantityToAdd] = useState();

    const {id} = useParams();

    function onAdd(quantity, name) {
        setQuantityToAdd(quantity)
        console.log(`Usted agregó ${quantity} item/s de ${name} a su carrito`)
    }
    

    useEffect(() => {
        setTimeout(() => {
            getFetch(id)
            .then(response => setProduct(response))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

        }, 5000);
    },[id]);


  return (
    <div className="loading">
        {loader ? <h3>Cargando...</h3> : <ItemDetail product={product} onAdd={onAdd}/>}
    </div>
  );
}

export default ItemDetailContainer