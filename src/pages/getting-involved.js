import SocialMedia from "../components/social-media/SocialMedia";

import { Link } from "react-router-dom";

function GettingInvolved() {
  return (
    <>
      <h1 className="page-header">Getting Involved</h1>
      <div className="margin-width">
        <div>
          <h2>Becoming Part of Experience</h2>
          <div>
            Have amazing craftsmenship? <br /> Maybe a unique and trilling show?
            <br /> Wish to help out the St Louis Renaissance Festival? <br />
            Wish to sponsor this dream? <br /> Want to become someone of the
            past or a creature from the depths of lore?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link to="/employment">
              <button className="involve-bttn" id='employ-involve'>Empolyment Opportunities</button>
            </Link>
            <Link to="vendor-application">
              <button className="involve-bttn" id='vendor-involve'>
                Vendor Application &#38; Sponsorship
              </button>
            </Link>
            <Link to="/community-relations-fundraising">
              <button className="involve-bttn" id='community-involve'>
                Community Relations &#38; Fundraising
              </button>
            </Link>
          </div>
        </div>
        <SocialMedia />
      </div>
    </>
  );
}

export default GettingInvolved;
