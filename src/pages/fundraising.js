import SocialMedia from "../components/social-media/SocialMedia";
import Navigation from "../components/navigation/Navigation.js";
import { Link } from "react-router-dom";

function Fundraising() {
  return (
    <>
     <Navigation />
      <h1 className="page-header">Community Relations &#38; Fundraising</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <FoodFundraiser />
            <TicketFundraiser />
            <CarsFundraiser />
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


function FoodFundraiser() {
  return (
    <>
      <h2 className="second-header">
        To The Faire
      </h2>
    </>
  )
}

function CarsFundraiser() {
  return (
    <>
      <h2 className="second-header">
        To The Faire
      </h2>
    </>
  )
}

function TicketFundraiser() {
  return (
    <>
      <h2 className="second-header">
        To The Faire
      </h2>
    </>
  )
}

export default Fundraising;
