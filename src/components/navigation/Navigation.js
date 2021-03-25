import React, { useState, useEffect } from "react";
import "../../css/navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BurgerNav from "./BurgerNav";

function Navigation() {
  const [sticky, setSticky] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (sticky === false) {
        if (window.pageYOffset > 131) {
          setSticky(true);
        }
      } else {
        if (window.pageYOffset < 131) {
          setSticky(false);
        }
      }
    });
  }, [sticky]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024 ? true : false;

  return (
    <>
      {/*Navigation Bar with Dropdown Quick Links */}
      {isMobile ? (
        <BurgerNav />
      ) : (
        <nav className={sticky ? "nav nav-sticky" : "nav"}>
          <ul className="nav__menu" id="nav-bar">
            <li>
              <Link className="small-tab drop" to="/tickets">
                Tickets
              </Link>
              <TicketDropdown />
            </li>
            <li>
              <Link className="small-tab" to="/weddings">
                Weddings
              </Link>
            </li>
            <li>
              <Link id="weekends" className="small-tab" to="/weekends">
                Themed Weekends
              </Link>
              <WeekendDropdown />
            </li>
            <li>
              <Link id="entertain" to="/entertainment-vendor">
                Entertainers &#38; Vendors
              </Link>
            </li>
            <li>
              <Link className="small-tab drop" to="/cast">
                Cast
              </Link>
              <ul className="nav__submenu">
                <li>
                  <Link className="nav__submenu-item" to="/warriors-island">
                    Warriors Island
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="small-tab" to="/about-us">
                About us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

function TicketDropdown() {
  return (
    <ul className="nav__submenu">
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/tickets#general-tickets"
        >
          Renaissance Tickets
        </HashLink>
      </li>
      <li>
        <HashLink className="nav__submenu-item" smooth to="/tickets#les-amis">
          Les Amis Tickets
        </HashLink>
      </li>
      <li>
        <HashLink className="nav__submenu-item" smooth to="/tickets#kegs">
          Kegs N Eggs Tickets
        </HashLink>
      </li>
      <li>
        <Link className="nav__submenu-item" to="/bring-your-dog">
          Bring Your Dog
        </Link>
      </li>
    </ul>
  );
}

function WeekendDropdown() {
  return (
    <ul className="nav__submenu">
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#highland-fling"
        >
          Highland Fling
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#pets-pirate-ale"
        >
          Pets, Pirates &#38; Ale
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#shamrocks-shenanigans"
        >
          Shamrocks, Shenanigans &#38; Sweet Romance
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#viking-invasion"
        >
          Viking Invasion and Cosplay in the Kingdom
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#oktoberfest"
        >
          Oktoberfest and Other Wonders of the World
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth
          to="/weekends#ladies-shopping-day"
        >
          Ladies Shopping Day
        </HashLink>
      </li>
    </ul>
  );
}

export default Navigation;
