import React from "react";
import SocialMedia from "../components/social-media/SocialMedia";
import { employmentList } from "../lists/employment-list";
import Navigation from "../components/navigation/Navigation.js";
import { Link } from "react-router-dom";
import application from '../pdf-files/Employee-Application.pdf'

function Employment() {
  return (
    <>
    <Navigation />
    <p>
      <h1 className="page-header">Employment Opportunities</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <p>
              Looking to work in a fun and unique environment? Then you are in
              the right place! Whether you are looking for something part-time
              or in the entertainment industry we have it all.
              <br />
              <b>Check out all of our available opportunities below.</b>
            </p>
            <div
              style={{
                borderBottom: "2px solid #5000e6b6",
                borderTop: "2px solid #5000e6b6",
                padding: "2% 0",
              }}
              >
              {employmentList &&
                employmentList.map((element) => {
                  return (
                    <>
                      <h4>
                        <b>{element.title}</b>
                      </h4>
                      <p key={element.title} style={{ marginBottom: "3%" }}>
                        <i>{element.description}</i>
                      </p>
                    </>
                  );
                })}
            </div>
            <div>
              <p>
                To apply, download and fill out an{" "}
                <a
                  href={application}
                  target="_blank"
                  rel="noreferrer"
                  >
                  Application
                </a>{" "}
                and do one of the following:
              </p>
            </div>
          </div>
          <div className="col2">
            <h3 className="col2-header">Get Involved</h3>
            <Link to="/employment">Employment Opportunities</Link>
            <br />
            <Link to="/vendor-application">
              Vendor Application &#38; Sponsorship
            </Link>
            <br />
            <Link to="/community-relations-fundraising">
              Community Relations &#38; Fundraising
            </Link>
            <SocialMedia />
          </div>
        </div>
      </div>
    </p>
    </>
  );
}

export default Employment;
