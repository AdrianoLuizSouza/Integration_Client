import React from 'react';
import "./Home.css";
import {Container,
        Row, 
        Col,
        Card
    } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return(
            <Container >
                <Row>
                    <Col  xs={12} md={4}>
                        <Card bg="success" text="white" >
                            <Card.Header>TESTE</Card.Header>
                            <Card.Body>
                            <Card.Title>Teste Titulo</Card.Title>
                            <Card.Text>
                                Teste
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col xs={12} md={4}>
                    <Card  bg="warning" text="white" >
                            <Card.Header>TESTE</Card.Header>
                            <Card.Body>
                            <Card.Title>Teste Titulo</Card.Title>
                            <Card.Text>
                                Teste
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col  xs={12} md={4}>
                    <Card bg="danger" text="white" >
                            <Card.Header>TESTE</Card.Header>
                            <Card.Body>
                            <Card.Title>Teste Titulo</Card.Title>
                            <Card.Text>
                                Teste
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home;