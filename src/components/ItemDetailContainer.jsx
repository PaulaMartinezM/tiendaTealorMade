import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

function ItemDetailContainer() {
    const [item, setItems] = useState({});
    const [loader, setLoader] = useState(true);
    

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/data.json")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

        }, 2000);
    },[]);


  return (
    <div>
        {loader ? <h3>Cargando...</h3> : <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer