import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {dateObject} from "../../lists/UPTODATE";
import RenLogo from "../../images/renaissance-festival-logo.png";
import "../../css/footer.css";
import MiniFooter from './MiniFooter';

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

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
      {isMobile? <MiniFooter /> : 
      <div className="foot">
        <div id="cr-tags">
          <img src={RenLogo} alt="StL Renaissance Festival Logo" />
          <p>
            Copyright © {dateObject.year}. St. Louis Renaissance Festival.{" "}
            <br />
            All rights reserved.{" "}
            <Link id="sitemap-link" to="/sitemap">
              sitemap
            </Link>
          </p>
        </div>

        <div id="reasons">
          <h3>Reasons to Attend:</h3>
          <p>Free Parking</p>
          <p>Live Armored Jousting</p>
          <p>Various Bars, Pubs and Taverns</p>
          <p>GOT Throne of Swords</p>
          <p>Pub Crawls</p>
          <p>Aerial Act</p>
          <p>Escape Room</p>
          <p>Live Unicorns</p>
          <p>Archery</p>
          <p>Turkey Legs</p>
          <p>Mermaid Cove</p>
          <p>And More!</p>
        </div>

        <div id="general">
          <h3>General Information</h3>
          <Link className="foot-link" to="/tickets">
            Buy Tickets
          </Link>
          <Link className="foot-link" to="/bring-your-dog">
            Bring your Dog
          </Link>
          <Link className='foot-link' to='/events-contests-promotions'>
            Daily Events, Contests &#38; Promotions
          </Link>
          <Link className="foot-link" to="/faq">
            FAQ
          </Link>
          <Link className="foot-link" to="/employment">
            Employment
          </Link>
          <Link className="foot-link" to="/contact-us">
            Contact Us
          </Link>
        </div>

        <div id="realm">
          <h3>Explore the Realm</h3>
          <Link className="foot-link" to="/cast">
            Cast
          </Link>
          <Link className="foot-link" to="/warriors-island">
            Fallen Warriors
          </Link>
          <Link className='foot-link' to='/entertainment-vendor'>
            Entertainers &#38; Vendors
          </Link>
          <Link className="foot-link" to="/weekends">
            Themed Weekends
          </Link>
        </div>
      </div>
    }
    </>
  );
}

export default Footer;
