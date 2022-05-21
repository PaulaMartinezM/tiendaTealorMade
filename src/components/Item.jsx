import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import './Item.css';


function Item({ el }) {
    return (
        <div className='cardSpace'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='pictureCard' variant="top" src={el.img} />
                <Card.Body className='cardText'>
                    <Card.Title className='cardName'>{el.name}</Card.Title>
                    <Card.Text className='cardInfo'>
                        <p>{`Categoría: ${el.category}`}</p>
                        <p>{`Variedad: ${el.variety}`}</p>
                        <p>{`Precio: ${el.price}`}</p>
                    </Card.Text>
                    <Link to={`/itemDetail/${el.id}`}>
                        <button className="item__addBtn" >Detalle del producto</button>
                    </Link>
                    <ItemCount initial={1} stock={5} onAdd={() => alert(`Usted agregó unidades a su carrito`)} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item