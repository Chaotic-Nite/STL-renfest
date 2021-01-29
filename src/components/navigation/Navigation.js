import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../css/navigation.css";

function Navigation() {
  const [tickets, setTickets] = useState(false);
  const [weekends, setWeekends] = useState(false);
  const [cast, setCast] = useState(false);

  // Shows for Dropdown
  const showTickets = (e) => {
    setTickets(!tickets);
  };
  const showWeekends = (e) => {
    setWeekends(!weekends);
  };
  const showCast = (e) => {
    setCast(!cast);
  };

  // Hides for Dropdown
  const hideTickets = (e) => {
    setTickets(false);
  };
  const hideWeekends = (e) => {
    setWeekends(false);
  };
  const hideCast = (e) => {
    setCast(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className="navPiece"
              title="Tickets"
              show={tickets}
              onMouseEnter={showTickets}
              onMouseLeave={hideTickets}
              onClick={() => {
                <NavLink href="tickets"></NavLink>;
              }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/tickets#general-tickets">
                Renaissance Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/tickets#les-amis">
                Les Amis Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/tickets#kegs-n-eggs">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/bring-your-dog">
                Bring Your Dog
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navPiece" href="/weddings">
              weddings
            </Nav.Link>
            <NavDropdown
              className="navPiece"
              title="Themed Weekends"
              show={weekends}
              onMouseEnter={showWeekends}
              onMouseLeave={hideWeekends}
              onClick={() => {
                console.log("cheetos");
              }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/weekends#highland-fling">
                Highland Fling
              </NavDropdown.Item>
              <NavDropdown.Item href="/weekends#pets-n-pirates">
                Les Amis Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/weekends#shamrocks-romance">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/weekends#viking-invasion">
                Bring Your Dog
              </NavDropdown.Item>
              <NavDropdown.Item href="/weekends#oktoberfest">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/weekends#ladies-shopping">
                Bring Your Dog
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="navPiece"
              title="Cast"
              show={cast}
              onMouseEnter={showCast}
              onMouseLeave={hideCast}
              onClick={() => {
                console.log("cheetos");
              }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/warriors-island">
                Warriors Island
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navPiece" href="/entertainment-vendor">
              Entertainers &#38; Vendors
            </Nav.Link>
            <Nav.Link className="navPiece" href="/about-us">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
