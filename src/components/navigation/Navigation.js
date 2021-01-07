import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <NavBar bg="dark" variant="dark">
      <Nav className="navbar sticky-top" id="paths">
        <ul className="Nav-NavLinks">
          <NavDropdown
            title="Dropdown"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            open={open}
            noCaret
          >
            <li>
              <NavLink to="/tickets">Tickets</NavLink>
            </li>
          </NavDropdown>
          <NavItem>
            <li>
              <NavLink to="/weddings">Weddings</NavLink>
            </li>
          </NavItem>
          <NavDropdown
            title="Dropdown"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            open={open}
            noCaret
          >
            <li>
              <NavLink to="/weekends">Themed Weekends</NavLink>
            </li>
          </NavDropdown>
          <NavDropdown
            title="Dropdown"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            open={open}
            noCaret
          >
            <li>
              <NavLink to="/entertain">Entertainers / Vendors</NavLink>
            </li>
          </NavDropdown>
          <NavDropdown
            title="Dropdown"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            open={open}
            noCaret
          >
            <li>
              <NavLink to="/cast">Cast</NavLink>
            </li>
          </NavDropdown>
          <NavItem>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
          </NavItem>
        </ul>
      </Nav>
    </NavBar>
  );
}

export default Navigation;
