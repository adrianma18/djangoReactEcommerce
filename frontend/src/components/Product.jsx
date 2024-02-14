import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className='my-3 p-3 rounded bg-primary' style={{ height: '400px' }}>
            <Link to={`/product/${product._id}`}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img src={product.image} style={{ width: '100%', height: '200px' }} />
                </div>
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div" >
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;