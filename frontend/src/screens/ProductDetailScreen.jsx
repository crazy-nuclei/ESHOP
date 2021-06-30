import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { productDetailFetch } from '../redux/reducers/product/product.action';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductDetailScreen = ({ match }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productDetailFetch(match.params.id));
    }, [dispatch, match]);

    const { product, loading, error } = useSelector(state => state.productDetail);

    return <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
            <Row>

                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating val={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row><Button className="btn-block" type='Button' disabled={product.countInStock === 0}>Add To Cart</Button></Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>}
    </>

}


export default ProductDetailScreen;