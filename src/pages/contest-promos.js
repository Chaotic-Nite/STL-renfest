import SocialMedia from "../components/social-media/SocialMedia";
import { Link } from "react-router-dom";

function ContestPromos() {
  return (
    <>
      <h1 className="page-header">Contests &#38; Promotions</h1>
      <div className="margin-width">
        <div className="two-col">
          <div></div>
          <div className="col2">
            <h3 className="col2-header">Plan Your Visit</h3>
            <ul>
              <li>
                <Link className="col2-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/key-policies">
                  Key Policies
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/tickets">
                  Get Tickets
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/bring-you-dog">
                  Bring Your Dog
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/find-hotels">
                  Find a hotel
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/directions">
                  Directions
                </Link>
              </li>
            </ul>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContestPromos;
