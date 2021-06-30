import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/reducers/products/products.actions';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const productsList = useSelector(state => state.productsList);

    const { loading, products, error } = productsList;
    return <>
        <h1>Latest Products</h1>
        {
            loading ? <Loader /> : (error) ? <Message variant='danger'>{error}</Message> : <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        }


    </>
}


export default HomeScreen;