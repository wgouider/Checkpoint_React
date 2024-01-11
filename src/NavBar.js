import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavBar = () => {
  return (

    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
}
// Commande export qui ermet de l'importer dans App.JS//
export default NavBar