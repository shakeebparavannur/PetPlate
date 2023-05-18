import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { login, logginUser, logginUsername } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const log = localStorage.getItem("login");
  const logout = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("username", "");

    return navigate("/login");
  };
  return (
    <div style={{ backgroundColor: "cyan" }}>
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Navbar.Brand as={Link} to="/">
          Pet Plate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/AllProduct">
              Product
            </Nav.Link>
            {log === "true" ? (
              <Nav.Link as={Link} to="/login">
                Hi {logginUsername}
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/pet">
              Pet
            </Nav.Link>
            <Nav.Link as={Link} to="/service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            {log == "true" && (
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            )}
            {log === "true" ? (
              <Nav.Link as={Link} onClick={() => logout()}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/SignUp">
                SignUp
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
