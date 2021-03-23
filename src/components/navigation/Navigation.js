import React, { useState, useEffect } from "react";
import "../../css/navigation.css";
import { Link } from "react-router-dom";
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
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/tickets",
            hash: "#general-tickets",
          }}
        >
          Renaissance Tickets
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/tickets",
            hash: "#les-amis",
          }}
        >
          Les Amis Tickets
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/tickets",
            hash: "#kegs",
          }}
        >
          Kegs N Eggs Tickets
        </Link>
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
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#highland-fling",
          }}
        >
          Highland Fling
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#pets-pirate-ale",
          }}
        >
          Pets, Pirates &#38; Ale
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#shamrocks-shenanigans",
          }}
        >
          Shamrocks, Shenanigans &#38; Sweet Romance
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#viking-invasion",
          }}
        >
          Viking Invasion and Cosplay in the Kingdom
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#oktoberfest",
          }}
        >
          Oktoberfest and Other Wonders of the World
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          to={{
            pathname: "/weekends",
            hash: "#ladies-shopping-day",
          }}
        >
          Ladies Shopping Day
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
