import SocialMedia from "../components/social-media/SocialMedia";

import { Link } from "react-router-dom";

function GettingInvolved() {
  return (
    <>
      <h1 className="page-header">Getting Involved</h1>
      <div className="margin-width two-col">
        <div className="col1-width">
          <h2>
            Dare to be involved to a trip to past? There's numerous was to do
            so.
          </h2>
        </div>
        <div className="col2">
          <h3 className="col2-header">Get Involved</h3>
          <Link to="/employment">Employment Opportunities</Link>
          <br />
          <Link to="/vendor-application">Vendor Application</Link>
          <br />
          <Link to="/community-relations-fundraising">
            Community Relations, Fundraising &#38; Sponsorship
          </Link>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default GettingInvolved;
