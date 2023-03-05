import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BrandNavbar = () => {
  const MainNavbar = () => {
    return (
      <Navbar
        collapseOnSelect
        className="sticky-top shadow"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container fluid>
          <Navbar.Brand href="/">Tripling</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Left Links */}
              {sessionStorage.getItem("user_data") !== null && sessionStorage.getItem("user_data") !== undefined && <Nav.Link href="/dash">Dash</Nav.Link>}
              {/*<Nav.Link href="/home">Home</Nav.Link>*/}
            </Nav>

            <Nav>
              <NavDropdown
                title={<i className="fa-solid fa-user"></i>}
                id="collasible-nav-dropdown"
                align="end"
              >
                {console.log(sessionStorage.getItem("user_data"))}
                {sessionStorage.getItem("user_data") !== undefined && sessionStorage.getItem("user_data") !== null ? (
                  <NavDropdown.Item href="/Logout">{"Logout"}</NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/Login">{"Login"}</NavDropdown.Item>
                )}
              </NavDropdown>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  return (
    <>
      <MainNavbar />
    </>
  );
};

export default BrandNavbar;
