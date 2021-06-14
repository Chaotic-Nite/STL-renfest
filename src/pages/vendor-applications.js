import SocialMedia from "../components/social-media/SocialMedia";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navigation from "../components/navigation/Navigation";

function VendorApplications() {
  return (
    <>
    <Navigation />
      <h1 className="page-header">Vendor Applications</h1>
      <div className="margin-width">
        <div className="two-col">
          <div>
            <p style={{ display: "inline-block" }}>
              We are always looking for outside vendors to set up a booth during
              on of our themed weekends: <br /> (
              <HashLink smooth to="/weekends#pets-pirate-ale">
                Pets, Pirates &#38; Ale
              </HashLink>
              {", "}
              <HashLink smooth to="/weekends#highland-fling">
                Highland Fling
              </HashLink>
              {", "}{" "}
              <HashLink smooth to="/weekends#shamrocks-shenanigans">
                Shamrocks, Shenanigans &#38; Sweet Romance
              </HashLink>
              {", "}{" "}
              <HashLink smooth to="/weekends#viking-invasion">
                Viking Invasion and Cosplay in the Kingdom
              </HashLink>
              {", and "}
              <HashLink smooth to="/weekends#oktoberfest">
                Oktoberfest and Other Wonders of the World
              </HashLink>
              ). <br />
              If you are interested in being a vendor, contact us at{" "}
              <b>(636) 639-5173</b> or email: <b>renfestcrafts@gmail.com</b>
            </p>
            <br />
            <p>
              We are currently <b>not</b> accepting these type of vendors at
              this time:
            </p>
            <ul style={{ color: "#8b0000", listStyleType: "none" }}>
              <li>food</li>
              <li>beverage</li>
              <li>clothing</li>
              <li>leather</li>
            </ul>
          </div>
          <div className="col2">
            <h3 className="col2-header">Get Involved</h3>
            <Link to="/employment">Employment Opportunities</Link>
            <br />
            <Link to="/vendor-application">Vendor Application</Link>
            <br />
            <Link to="/community-relations-fundraising">
              Community Relations &#38; Fundraising
            </Link>
            <SocialMedia />
          </div>
        </div>
      </div>
      <h1 className="page-header">Sponsorship</h1>
      <h2>Interested in becoming a Sponsor?</h2>
      <p>Contact us at (636) 639-5173</p>
      <p>Or email akuchar@renaissancefest.com</p>
    </>
  );
}

export default VendorApplications;
