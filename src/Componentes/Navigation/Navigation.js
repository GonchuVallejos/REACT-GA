import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import './Navigation.css'

function Navegacion(){
    return(
        <Navbar className="navbar" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand className="imagen-logo" href="/">
            <img src="http://jujuy.gob.ar/home/img/logo-footer.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="http://jujuy.gob.ar/home/autoridades.html" target="_blank">Organigrama</Nav.Link>
                <Nav.Link href="#Link/">Datos Abiertos</Nav.Link>
                <Nav.Link href="/Contacto">Contacto</Nav.Link>
                <NavDropdown title="Presupuesto" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Información">Información</NavDropdown.Item>
                    <NavDropdown.Item href="/Presupuesto">Presupuesto Anuales</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navegacion;