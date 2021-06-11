import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Link } from "react-router-dom";
import {dateObject} from "../../lists/UPTODATE";
import RenLogo from "../../images/renaissance-festival-logo.png";

function MiniFooter() {
    const [key, setKey] = useState('home');
  
    return (
        <div className='minifoot'>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        >
        <Tab eventKey="home" title="Rights Reserved">
          <RightsFoot />
        </Tab>
        <Tab eventKey="reasons" title="Reasons to Attend">
          <ReasonsFoot />
        </Tab>
        <Tab eventKey="general" title="General Information" >
          <GeneralFoot />
        </Tab>
        <Tab eventKey="explore" title="Explore the Realm" >
          <Explore />
        </Tab>
      </Tabs>
    </div>
    );
  }


function RightsFoot() {
    return (
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
    )
}

function ReasonsFoot() {
    return (
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
    )
}

function GeneralFoot() {
    return (
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
    )
}

function Explore() {
    return (
        <div id="realm">
          <h3>Explore the Realm</h3>
        </div>
    )
}

export default MiniFooter;