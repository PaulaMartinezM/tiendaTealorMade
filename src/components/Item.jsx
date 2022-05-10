import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import './Item.css';


function Item({ name, category, variety, price, img }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{category}</p>
                        <p>{variety}</p>
                        <p>{`Precio: ${price}`}</p>
                    </Card.Text>
                    <ItemCount initial={1} stock={5} onAdd={()=>alert(`Usted agregó unidades a su carrito`)}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item