import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import '../../sass/grid/item.scss';

function Item({image, name, id}) {    
    return (
        <Link to={ "/user/" + name } className="item">
            <Card className="w-100 border-0">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                    <Card.Text className="id">{id}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item
