import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../css/navigation.css";

function Navigation() {
  const [tickets, setTickets] = useState(false);
  const [weekends, setWeekends] = useState(false);
  const [cast, setCast] = useState(false);

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
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/pages/tickets#general-tickets">
                Renaissance Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/tickets#les-amis">
                Les Amis Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/tickets#kegs-n-eggs">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/tickets#bring-your-dog">
                Bring Your Dog
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navPiece" href="/pages/weddings">
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
              <NavDropdown.Item href="/pages/weekends#highland-fling">
                Highland Fling
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/weekends#pets-n-pirates">
                Les Amis Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/weekends#shamrocks-romance">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/weekends#viking-invasion">
                Bring Your Dog
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/weekends#oktoberfest">
                Kegs N Eggs Tickets
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/weekends#ladies-shopping">
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
              <NavDropdown.Item href="/pages/warriors-island">
                Warriors Island
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navPiece" href="/pages/entertainment-vendor">
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
