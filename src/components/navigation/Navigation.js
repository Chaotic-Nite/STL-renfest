import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../css/navigation.css";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a>Tickets</a>
            <SubTickets />
          </li>
          <li className="nav__menu-item">
            <a>Weddings</a>
          </li>
          <li className="nav__menu-item">
            <a>Themed Weekends</a>
            <SubWeekends />
          </li>
          <li className="nav__menu-item">
            <a>Enterainers &#38; Vendors</a>
          </li>
          <li classNam="nav__menu-item">
            Cast
            <SubCast />
          </li>
          <li classNam="nav__menu-item">
            About Us
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
        <a>Renaissance Tickets</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Les Amis Tickets</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Kegs N Eggs Tickets</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Bring Your Dog</a>
      </li>
    </ul>
  );
}

function SubCast() {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Warriors Island</a>
      </li>
    </ul>
  );
}

function SubWeekends() {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Highland Fling</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Pets, Pirates &#38; Ale</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Shamrocks, Shenanigans &#38; Sweet Romance</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Viking Invasion &#38; Cosplay in the Kingdom</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Oktoberfest &#38; Other Wonders of the World</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Ladies Shopping Day</a>
      </li>
    </ul>
  );
}

export default Navigation;
