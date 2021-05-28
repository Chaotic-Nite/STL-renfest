import SocialMedia from "../components/social-media/SocialMedia";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation/Navigation.js";

function ContactUs() {
  return (
    <>
      <Navigation />
      <h1 className="page-header">Contact Us</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <p>
              <b>Festival Site Address:</b>
            </p>
            <p>
              Rotary Park <br />
              2577 West Meyer Road <br />
              Wentzville, MO 63385
            </p>

            <p>
              <b>Office Phone Number:</b> (636) 639-5173
            </p>
            <hr />
            <p>
              <b>Off-Site Address (Non-Festival Season):</b>
            </p>
            <p>
              207 S. Linn Ave. <br />
              Wentzville, MO 63385
            </p>
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
    </>
  );
}

export default ContactUs;
