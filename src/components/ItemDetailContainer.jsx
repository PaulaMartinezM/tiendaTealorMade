import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [id]);

    return (
        <div className="loading">
            {loader ?
                <Loader /> :
                <ItemDetail product={product} />}
        </div>
    );
}
