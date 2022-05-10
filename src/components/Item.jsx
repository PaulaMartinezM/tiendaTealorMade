import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import './Item.css';


function Item({ name, category, variety, price, img }) {
    return (
        <div className='cardSpace'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='pictureCard' variant="top" src={img} />
                <Card.Body className='cardText'>
                    <Card.Title className='cardName'>{name}</Card.Title>
                    <Card.Text className='cardInfo'>
                        <p>{`Categoría: ${category}`}</p>
                        <p>{`Variedad: ${variety}`}</p>
                        <p>{`Precio: ${price}`}</p>
                    </Card.Text>
                    <ItemCount initial={1} stock={5} onAdd={()=>alert(`Usted agregó unidades a su carrito`)}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item