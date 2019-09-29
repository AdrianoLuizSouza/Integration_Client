import React, { useState } from 'react';
import { Modal, 
         Button,
         Form,
         Col}
         from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

  export default function CustomerAdd() {

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const oPost = () => {
                              alert('Aplicar Api');
                              handleClose();
                            }
      return (
        <>
         <FontAwesomeIcon icon={faPlus}  onClick={handleShow} color="green"/>
  
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>  Incluir Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                    <Form.Row>
                      <Form.Group as={Col} md="6" controlId="Name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control/>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="6" controlId="Address">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="AddressComplement">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="5" controlId="City">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} md="5" controlId="State">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select">
                          <option>Escolha...</option>
                          <option>São Paulo</option>
                          <option>Rio de Janeiro</option>
                          <option>Brasilia</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} md="2" controlId="ZipCode">
                        <Form.Label>Cep</Form.Label>
                        <Form.Control/>
                      </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary"  onClick={oPost}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
  }