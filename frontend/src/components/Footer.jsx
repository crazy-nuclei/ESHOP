import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {

    return <footer>
        <Container>
            <Row>
                <Col className="py-3 text-center">
                    CopyRight &copy; ESHOP
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;