import React from 'react';
import "./Home.css";
import {Container,
        Row, 
        Col
    } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col  xs={12} md={3}>
                    HOME
                    </Col>
                    <Col  xs={12} md={3}>
                    HOME
                    </Col>
                    <Col  xs={12} md={3}>
                    HOME
                    </Col>
                    <Col xs={12} md={3}>
                    HOME
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home;