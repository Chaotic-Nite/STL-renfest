import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <NavBar bg="dark" variant="dark">
      <Nav className="navbar sticky-top" id="paths">
        <ul className="Nav-NavLinks">
          <NavItem>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </NavItem>
          <NavItem>
            <li>
              <NavLink to="/Photos">Photos</NavLink>
            </li>
          </NavItem>
          <NavItem>
            <li>
              <NavLink to="/Photos">Photos</NavLink>
            </li>
          </NavItem>
          <NavItem>
            <li>
              <NavLink to="/Photos">Photos</NavLink>
            </li>
          </NavItem>
        </ul>
      </Nav>
    </NavBar>
  );
}

export default Navigation;
