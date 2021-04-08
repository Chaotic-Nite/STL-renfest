import React from "react";
import { Link } from 'react-router-dom'
import SocialMedia from "../components/social-media/SocialMedia";

function Directions() {
  return (
    <>
      <h1 className="page-header">Directions</h1>
      <div className="margin-width two-col">
        <div>
          <iframe
            title="map"
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.1727584314367!2d-90.91781618465168!3d38.828504179581365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87deb810190c5b07%3A0x62362b98892f47f1!2s2577+W+Meyer+Rd%2C+Foristell%2C+MO+63348!5e0!3m2!1sen!2sus!4v1502466604621"
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
              <Link className="col2-link" to="/find-hotels">
                Find a hotel
              </Link>
            </li>
          </ul>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Directions;
