import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BrandNavbar = () => {
  const MainNavbar = () => {
    return (
      <Navbar collapseOnSelect className='sticky-top shadow' expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="/">Tripling</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">


            <Nav className="me-auto">
              {/* Left Links */}
              <Nav.Link href="/dash">Dash</Nav.Link>
              {/*<Nav.Link href="/home">Home</Nav.Link>*/}
            </Nav>

            <Nav>
              <NavDropdown title={(<i className="fa-solid fa-user"></i>)} id="collasible-nav-dropdown" align="end">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  return (
    <>
      <MainNavbar />
    </>
  )
}

export default BrandNavbar