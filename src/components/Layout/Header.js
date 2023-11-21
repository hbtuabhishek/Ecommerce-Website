import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <HeaderCartButton/>
        </Container>
      </Navbar>
      <div><h1>The Generic</h1></div>
    </>
  );
};
export default Header;
