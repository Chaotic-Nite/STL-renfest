import React from "react";
import "../../css/navigation.css";

function Navigation() {
  return (
    <>
       {/*Navigation Bar with Dropdown Quick Links */}
        <nav  className="nav">
          <ul className="nav__menu" id="nav-bar">
            <li><a className="small-tab drop" href="pages/tickets.html">Tickets</a>
            <ul className="nav__submenu">
              <li><a className="nav__submenu-item" href="/pages/tickets.html#general-tickets">Renaissance Tickets</a></li>
              <li><a className="nav__submenu-item" href="/pages/tickets.html#les-amis">Les Amis Tickets</a></li>
              <li><a className="nav__submenu-item" href="/pages/tickets.html#kegs">Kegs N Eggs Tickets</a></li>
              <li><a className="nav__submenu-item" href="/pages/bring-your-dog.html">Bring Your Dog</a></li>
            </ul>
          </li>
            <li><a className="small-tab" href="pages/weddings.html">Weddings</a></li>
            <li><a id="weekends" className="small-tab" href="pages/weekends.html">Themed Weekends</a></li>
            <li>
              <a id="entertain" href="pages/entertainment-vendor.html">Entertainers & Vendors</a>
            </li>
            <li>
              <a className="small-tab drop" href="/pages/cast.html">Cast</a>
              <ul className="nav__submenu">
                <li><a className="nav__submenu-item" href="/pages/warriors-island.html">Warriors Island</a></li>
              </ul>
            </li>
            <li><a className="small-tab" href="pages/about-us.html">About us</a></li>
          </ul>
        </nav>
    </>
  );
}


export default Navigation;
