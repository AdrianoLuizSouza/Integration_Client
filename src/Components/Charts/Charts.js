import React from 'react';
import "./Charts.css";
import {Container,
        Row, 
        Col
    } from 'react-bootstrap';

class Charts extends React.Component{
    render(){
        return(    
            <Container>
                <Row>
                    <Col  xs={12} md={3}>
                    CHART 1
                    </Col>
                    <Col  xs={12} md={3}>
                    CHART 2
                    </Col>
                    <Col  xs={12} md={3}>
                    CHART 3
                    </Col>
                    <Col xs={12} md={3}>
                    CHART 4
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Charts;