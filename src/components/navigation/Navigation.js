import React, { useState, useEffect} from "react";
import "../../css/navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BurgerNav from "./BurgerNav";
import abstractNav from '../../images/blue-abstract-nav.png'
import {vendTabs, weekends} from '../../lists/themed-schedules'

// Open state and autoclose Dropdown ndeufemia
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
      {isMobile ? (
        <BurgerNav />
      ) : (
        <div>
        <nav className={sticky ? "main-nav nav-sticky" : "main-nav"}>
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
              <Link id="weekends" className="small-tab drop" to="/weekends">
                Themed Weekends
              </Link>
              <WeekendDropdown />
            </li>
            <li>
              <Link className="small-tab drop" id="entertain" to="/entertainment-vendor">
                Entertainers &#38; Vendors
              </Link>
              <EntertainerVendorsDropdown />
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
              <Link className="small-tab drop" to="/getting-involved">
                Getting Involved
              </Link>
              <InvolvmentDropdown />
            </li>
            <li>
              <Link className="small-tab drop" to="/about-us">
                About us
              </Link>
              <AboutUsDropdown />
            </li>
          </ul>
        </nav>
        </div>
      )}
    </>
  );
}

function TicketDropdown() {
  return (
    <ul className="nav__submenu" style={{backgroundImage: `url(${abstractNav})`}}> 
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to="/tickets#general-tickets"
        >
          Renaissance Tickets
        </HashLink>
      </li>
      <li>
        <HashLink className="nav__submenu-item" smooth='true' to="/tickets#les-amis">
          Les Amis Tickets
        </HashLink>
      </li>
      <li>
        <HashLink className="nav__submenu-item" smooth='true' to="/tickets#kegs">
          Kegs N Eggs Tickets
        </HashLink>
      </li>
      <li>
        <Link className="nav__submenu-item" to="/bring-your-dog">
          Bring Your Dog
        </Link>
      </li>
      <li>
        <Link className="nav__submenu-item" to="/events-contests-promotions">
          Events, Contests &#38; Promotions
        </Link>
      </li>
    </ul>
  );
}

function WeekendDropdown() {
  return (
    <ul className="nav__submenu" style={{backgroundImage: `url(${abstractNav})`}}>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.weekendOne.id}
        >
          {weekends.weekendOne.name}
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.weekendTwo.id}
        >
          {weekends.weekendTwo.name}
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.weekendThree.id}
        >
          {weekends.weekendThree.name}
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.weekendFour.id}
        >
          {weekends.weekendFour.name}
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.weekendFive.id}
        >
          {weekends.weekendFive.name}
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav__submenu-item"
          smooth='true'
          to={"/weekends#" + weekends.shoppingDay.id}
        >
          {weekends.shoppingDay.name}
        </HashLink>
      </li>
    </ul>
  );
}

function EntertainerVendorsDropdown() {
  return (
    <ul className="nav__submenu" style={{backgroundImage: `url(${abstractNav})`}}>
      {vendTabs.map((item) => {
        return (
          <li>
            <HashLink
             className="nav__submenu-item"
             smooth='true' 
             to={"/entertainment-vendor#" + item.id}
             >
              {item.name}
            </HashLink>
          </li>
        )})}
  </ul>
  )
}


function InvolvmentDropdown() {
  return (
    <ul className="nav__submenu" style={{backgroundImage: `url(${abstractNav})`}}>
      <li>
        <Link className="nav__submenu-item" smooth='true' to="/employment">
          Employment Opportunities
        </Link>
      </li>
      <li>
        <Link className="nav__submenu-item" smooth='true' to="/vendor-application">
          Vendor Application &#38; Sponsorship
        </Link>
      </li>
      <li>
        <Link
          className="nav__submenu-item"
          smooth='true'
          to="/community-relations-fundraising"
        >
          Community Relations &#38; Fundraising
        </Link>
      </li>
    </ul>
  );
}



function AboutUsDropdown() {
  return (
    <ul className="nav__submenu" style={{backgroundImage: `url(${abstractNav})`}}>
      <li>
        <Link className="nav__submenu-item" smooth='true' to="/key-policies">
          Key Policies
        </Link>
      </li>
    </ul>
  )
}

export default Navigation;
