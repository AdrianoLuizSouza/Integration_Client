import React, { useState } from 'react';
import {Modal,
        Button
        } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
      
        function EditObjetc() {
            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const oPost = (i) => {
                                    alert('Aplicar Api');
                                    handleClose();
                                  }
            return (
              <>
              <FontAwesomeIcon icon={faTrash} onClick={handleShow}  color="red"/> 
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Remover Cliente</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <FontAwesomeIcon icon={faInfoCircle} color="orange" size="lg"  />    Deseja realmente excluir esse cliente?
          
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Não
                    </Button>
                    <Button variant="primary"  onClick={oPost}>
                      Sim
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
class CustomerDelete extends React.Component {

    render() {
      
            return (
               <EditObjetc/>
            );
        }
}

export default CustomerDelete;

