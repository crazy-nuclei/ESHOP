import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../redux/reducers/user/user.actions';
import FormContainer from '../components/FormContainer';

const RegisterScreen = ({ location, history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    let { loading, error, userInfo } = useSelector(state => state.user);

    const redirect = location.search ? location.search.split('=')[1] : '/';


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        }
        else {
            dispatch(register(email, password, name));
            setMessage(null);
        }
    }
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);


    return <FormContainer>
        <h1>SiGN UP</h1>
        {message && <Message variant="danger">{message}</Message>}
        {!message && error && <Message variant="danger">{error}</Message>}
        {loading ? <Loader /> : <Form onSubmit={e => onSubmitHandler(e)}>
            <Form.Group controlId='name'>
                <Form.Label>
                    Name
                    </Form.Label>
                <Form.Control placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Address
                    </Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                    </Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
                <Form.Label>
                    Confirm Password
                    </Form.Label>
                <Form.Control type="password" placeholder="Enter Password Again" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type="submit" variant='primary' className="py-3" >Sign In</Button>
            <Row className='py-3'>
                <Col>
                    Have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>SIGN IN</Link>
                </Col>
            </Row>
        </Form>}
    </FormContainer>
}

export default RegisterScreen;