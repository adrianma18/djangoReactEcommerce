import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
    return (
        <Card className='my-3 p-3 rounded bg-primary' style={{ height: '400px' }}>
            <a href={`/product/${product._id}`}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img src={product.image} style={{ width: '100%', height: '200px' }} />
                </div>
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as="div" >
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
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