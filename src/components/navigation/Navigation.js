import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../css/navigation.css";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a>Home</a>
            <SubTickets />
          </li>
          <li className="nav__menu-item">
            <a>About</a>
            <Submenu />
          </li>
          <li className="nav__menu-item">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function SubTickets() {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Our Company</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Team</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Portfolio</a>
      </li>
    </ul>
  );
}

function SubCast() {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Our Company</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Team</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Portfolio</a>
      </li>
    </ul>
  );
}

function SubWeekends() {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Our Company</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Team</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Portfolio</a>
      </li>
    </ul>
  );
}

export default Navigation;
