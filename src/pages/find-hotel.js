import { Link } from "react-router-dom";
import SocialMedia from "../components/social-media/SocialMedia";
import Navigation from "../components/navigation/Navigation.js";

function FindHotel() {
  return (
    <>
     <Navigation />
      <h1 className="page-header">Find Hotels</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1">
            <iframe
              title="hotels"
              id="hotel"
              src="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <p id="hotelText">
              If the site hasn't loaded,{" "}
              <a href="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html">
                Click Here
              </a>
            </p>
          </div>
          <div className="col2">
            <h3 className="col2-header">Plan Your Visit</h3>
            <Link className="col2-link" to="/about-us">
              About Us
            </Link>
            <br />
            <Link className="col2-link" to="/key-policies">
              Key Policies
            </Link>
            <br />
            <Link className="col2-link" to="/tickets">
              Get Tickets
            </Link>
            <br />
            <Link className="col2-link" to="/contests-promotions">
              Contest &#38; Promotions
            </Link>
            <br />
            <Link className="col2-link" to="/bring-your-dog">
              Bring Your Dog
            </Link>
            <br />
            <Link className="col2-link" to="/directions">
              Directions
            </Link>
            <br />
            <Link className="col2-link" to="/faq">
              FAQ
            </Link>
            <br />
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindHotel;
