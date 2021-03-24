import { Link } from "react-router-dom";
import dateObject from "../../UPTODATE.js";
import RenLogo from "../../images/renaissance-festival-logo.png";
import "../../css/footer.css";

function Footer() {
  return (
    <>
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

        {/* <!-- Reasons to Attend --> */}
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

        {/* <!-- General Information --> */}
        <div id="general">
          <h3>General Information</h3>
          <Link className="foot-link" to="/tickets">
            Buy Tickets
          </Link>
          <Link className="foot-link" to="/bring-your-dog">
            Bring your Dog
          </Link>
          <Link className="foot-link" to="/faq">
            FAQ
          </Link>
          <Link className="foot-link" to="/site-employment">
            Employment
          </Link>
          <Link className="foot-link" to="/contact-us">
            Contact Us
          </Link>
        </div>

        {/* <!-- Exploring the Realm--> */}
        <div id="realm">
          <h3>Explore the Realm</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
