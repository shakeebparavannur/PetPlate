import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div style={{backgroundColor:"cyan"}}>
      <Navbar bg="light"  expand="lg" className="justify-content-center">
      <Navbar.Brand href="/">Pet Plate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/AllProduct">Product</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/pet">Pet</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar