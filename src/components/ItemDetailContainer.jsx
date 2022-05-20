import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

function ItemDetailContainer() {
    const [item, setItems] = useState({});
    const [loader, setLoader] = useState(true);
    const [quantityToAdd, setQuantityToAdd] = useState();

    const {id} = useParams();

    function onAdd(quantity, name) {
        setQuantityToAdd(quantity)
        console.log(`Usted agregó ${quantity} item/s de ${name} a su carrito`)
    }
    

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/data.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(el => el.id === id))
            .then(data => setItems(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

        }, 3000);
    },[id]);


  return (
    <div>
        {loader ? <h3>Cargando...</h3> : <ItemDetail item={item} onAdd={onAdd}/>}
    </div>
  );
}

export default ItemDetailContainer