import React from 'react';
import { Navbar,Container, Nav} from 'react-bootstrap'
const Navber = () => {
    return (
        <div>
             <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Mahlil</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">My projects</Nav.Link>
      <Nav.Link href="#pricing">Download Resume </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navber;