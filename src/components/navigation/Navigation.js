import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "../../css/navigation.css";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" class="navbar" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto navItems">
            <Nav.Link className="navPiece" href="/">
              Tickets
            </Nav.Link>
            <Nav.Link className="navPiece" href="/">
              Weddings
            </Nav.Link>
            <Nav.Link className="navPiece" href="/">
              Entertainers &#38; Vendors
            </Nav.Link>
            <Nav.Link className="navPiece" href="/">
              Cast
            </Nav.Link>
            <Nav.Link className="navPiece" href="/about-us">
              About Us
            </Nav.Link>

            {/* React Dropdown
            <NavDropdown
              className="navPiece"
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
