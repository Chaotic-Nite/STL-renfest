import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../css/navigation.css";
import { Dropdown } from "bootstrap";

function Navigation() {
  const [show, setShow] = useState(false);
  const navStyles = {
    color: "white",
  };
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <Nav
        fill
        variant="tabs"
        expand="lg"
        class="navbar"
        defaultActiveKey="/home"
      >
        <Nav.Link className="navPiece" style={navStyles} href="/">
          Tickets
        </Nav.Link>
        <Nav.Link className="navPiece" style={navStyles} href="/">
          Weddings
        </Nav.Link>
        <Nav.Link className="navPiece" style={navStyles} href="/">
          Entertainers &#38; Vendors
        </Nav.Link>
        <Nav.Link className="navPiece" style={navStyles} href="/">
          Cast
        </Nav.Link>
        <Nav.Link className="navPiece" style={navStyles} href="/about-us">
          About Us
        </Nav.Link>
        <Dropdown
          as={NavItem}
          show={show}
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Hello there!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </>
  );
}

export default Navigation;
