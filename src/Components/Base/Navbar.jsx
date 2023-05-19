import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate,Navigate } from "react-router-dom";
import { login, logginUser, logginUsername } from "../../App";

const NavBar = () => {
  const navigate = useNavigate();
  const log = localStorage.getItem("login");

  const logout = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("username", "");
    localStorage.setItem("UserId", null);
    return <Navigate to="/login"/>
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        Pet Plate
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/AllProduct" className="nav-link">
            Product
          </Nav.Link>
          {log === "true" ? (
            <Nav.Link as={Link} to="/login" className="nav-link">
              Hi, {logginUsername}
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/pet" className="nav-link">
            Pet
          </Nav.Link>
          <Nav.Link as={Link} to="/service" className="nav-link">
            Service
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact Us
          </Nav.Link>
          {log === "true" && (
            <Nav.Link as={Link} to="/cart" className="nav-link">
              Cart
            </Nav.Link>
          )}
          {log === "true" ? (
            <Nav.Link as={Link} to={'/'} onClick={()=>{logout()}} className="nav-link">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/SignUp" className="nav-link">
              Sign Up
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
