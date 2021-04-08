import { Link } from "react-router-dom"
import SocialMedia from "../components/social-media/SocialMedia";

function FindHotel() {
  return (
    <>
      <h1 className="page-header">Find Hotels</h1>
      <div className="margin-width two-col">
        <div>
          <iframe
            title="hotels"
            id="hotel"
            src="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
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
              <Link className="col2-link" to="/contests-promotions">
                Contest &#38; Promotions
              </Link>
            </li>
            <li>
              <Link className="col2-link" to="/bring-your-dog">
                Bring Your Dog
              </Link>
            </li>
            <li>
              <Link className="col2-link" to="/directions">
                Directions
              </Link>
            </li>
            <li>
              <Link className="col2-link" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default FindHotel;
