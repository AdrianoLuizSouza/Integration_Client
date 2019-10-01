import React from 'react';
import "./Menu.css";
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,
         faUser,
         faFileAlt} from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
    render() {
      return (
         <Navbar className="box-shadow" bg="light" expand="lg">
          <Navbar.Brand>Integration Client</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../home"><FontAwesomeIcon icon={faHome} color="black"/> Inicio </Nav.Link>
              <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                <NavDropdown.Item href="../Operation/Customer"><FontAwesomeIcon icon={faUser} color="#880D1E"/> Clientes</NavDropdown.Item>
             </NavDropdown>
              <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                <NavDropdown.Item href="../Reports/Customer"><FontAwesomeIcon icon={faFileAlt} color="0D871B"/> Clientes</NavDropdown.Item>
             </NavDropdown>
              <NavDropdown title="Graficos" id="basic-nav-dropdown">
                <NavDropdown.Item href="../Charts/Charts"><FontAwesomeIcon icon={faFileAlt} color="0D871B"/> Charts </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
      }
}

export default Menu;


