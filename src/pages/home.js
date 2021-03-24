import React, { useState } from "react";
import IntroPage from "../components/homepage-content/intro/Intro";
import WarningSign from "../components/homepage-content/warning/Warning";
import PhotoBanner from "../components/photobanner/PhotoBanner";
import Sponsors from "../components/sponsors/Sponsors";
import dateObject from "../UPTODATE";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../css/home.css";
import $ from "jquery";

function Home() {
  // Newsletter Email from original site
  const newsletter_submit = () => {
    let otherSiteSelected = "0";
    if ($("#tofTears").prop("checked")) {
      otherSiteSelected += "," + $("#tofTears").val();
    }
    let requestURL =
      "http://www.tunestub.com/embed/venues/renaissancefestmn/newsletter/dosignup.cfm" +
      "?email=" +
      $("#email").val() +
      "&tofTears=" +
      otherSiteSelected;
    $.ajax({
      type: "GET",
      cache: false,
      url: requestURL,
      dataType: "jsonp",
      success: function (result) {
        $("#ts-newsletter-msg-holder").html(result.html);
      },
    });
    return false;
  };

  return (
    <>
      <PhotoBanner />
      <WarningSign />
      <IntroPage />
      <div className="dates margin-width">
        <h2>
          Open Weekends for {dateObject.startDay} - {dateObject.endDay},
          {dateObject.year}
        </h2>
        <h3>10am - 6pm Rain or Shine</h3>
        <h3 style={{ fontVariant: "small-caps" }}>Free Parking</h3>
      </div>

      <div className="other-events margin-width">
        <span>
          <h2>Kegs N Eggs</h2>
        </span>
        <p style={{ fontSize: "30px" }}>
          Tickets are on sale <u>NOW</u> for the {dateObject.year} Season on
          April 10th {dateObject.year}!<br />
          <Link to="/tickets">Click Here</Link> to view ticket prices and
          options! <br />
          Early bird pricing ends April 3rd.
        </p>
      </div>

      {/* <!-- MAF Tags --> */}
      <div className="maf dates margin-width">
        <h2>Can't Wait to Celebrate!</h2>
        <div>
          Come join us as we celebrate our {dateObject.yearOfFaire} year! Enjoy
          entertainment ranging from pirates to jousting to juggling to turkey
          legs, and more! There’s something for everyone to enjoy. <br />
          <br />
          Produced by Mid-America Festivals, the St. Louis Renaissance Festival
          is entering its {dateObject.yearOfFaire} year. Mid-America Festivals
          is the largest outdoor event planning company in the nation and
          produces Renaissance Festivals in Minnesota, Michigan, Kansas City,
          St. Louis, and Tampa Bay Area.
        </div>
      </div>

      {/* <!-- Social Media Section --> */}
      <div className="social-media margin-width">
        <h1>Follow us on:</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/STLRenFest/"
            target="_blank"
            className="fa fa-facebook"
            rel="noreferrer"
          ></a>
          <a
            href="https://twitter.com/stlrenfest"
            target="_blank"
            className="fa fa-twitter"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.pinterest.com/stlouisrenaissa/"
            target="_blank"
            className="fa fa-pinterest"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/stlrenfest/"
            target="_blank"
            className="fa fa-instagram"
            rel="noreferrer"
          ></a>
        </div>
      </div>

      {/* <!-- Newsletter Sign-up --> */}
      <div className="email-list margin-width">
        <div className="subscribe-email">
          <h2>Sign up for our email list!</h2>
          <div className="news-msg-holder">
            <div className="news-error">
              Please enter a valid email address
              <br />
            </div>
          </div>
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email-input"
                id="email"
                maxLength="255"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                name="tofTears"
                id="tofTears"
                value="469"
                label="Trail of Terror"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              name="subscribe"
              id="subscribe"
              value="Subscribe"
              onClick={newsletter_submit}
            >
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
      <Sponsors />
    </>
  );
}

export default Home;
