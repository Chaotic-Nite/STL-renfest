import SocialMedia from "../components/social-media/SocialMedia";
import Navigation from "../components/navigation/Navigation.js";
import { Link } from "react-router-dom";
import {dateObject} from '../lists/UPTODATE'
import foodForm from '../pdf-files/Food-Booth-Application.pdf'
import carForm from '../pdf-files/C4C-B4C.pdf'
import ticketForm from '../pdf-files/Ticket-Outlet-Application.pdf'

function Fundraising() {
  return (
    <>
     <Navigation />
      <h1 className="page-header">Community Relations &#38; Fundraising</h1>
      <div className="margin-width">
        <p>THe fundraising excitement continues to grow at the St. Louis Renaissance Festival! The festival has three methods to help your organization raise funds.</p>
        <div className="two-col">
          <div className="col1-width fundraiser">
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
      <h2 className="second-header">Food 4 Funds Fundraiser</h2>
      <div>
        <p>The {dateObject.year} St. Louis Renaissance Festival offers an exciting fundraising program involvingour food and beverage booths ranging from a two person to a ten person booth, depending on your fundraising goal.</p>

        <p>The Food 4 Funds fundraiser involves running one or several Food and/or Beverage booths at the St. Louis Renaissance Festival for all 10 Days of the festival. Your organization could earn its entire year's fundraising goal in just 5 weekends! Groups earn an agreed upon compensation per worker based on the days worked, or a flat rate, whichever is greater. Not to mention a tip jar opportunity and the earning potential is unlimited!</p>
        <p><b>Fundraising Organization Must Provide:</b></p>
        <ol>
          <li>10 Day Commitment</li>
          <li>Organization</li>
          <li>Enthusiasm</li>
          <li>Accountability</li>
          <li>Staffing of Booth(s)</li>
        </ol>
        <DownloadForm url={foodForm}/>
      </div>
    </>
  )
}

function CarsFundraiser() {
  return (
    <>
      <h2 className="second-header">Cars 4 Cash &#38; Bags 4 Cash Fundraiser</h2>
      <p><i>Ready, set, park!</i> This fast paced fundraising opportunity will leave your organziation(s) pockets filled. During the Festival days, we will need volunteers to direct and park vehicles, all while earning an agreed amount of compensation per worker based on number of days worked, or a flat rate, whichever is greater.</p>
      <p>While some of your volunteers are assisting in the parking lot, other volunteers will be needed to pick up garbase and recycling from the festival grounds and receptacles to dumpsters and compactors. Just like parking, organization will recieve an agreed amount of compensation per worker based on number of days worked, or a flat rate, whichever is greater.</p>
      <DownloadForm url={carForm}/>
    </>
  )
}

function TicketFundraiser() {
  return (
    <>
      <h2 className="second-header">Tickets 4 Treasure Fundraiser</h2>
      <p>Attending the St. Louis Renaissance Festival has never been more popular and volunteer organizations are invited to take advantage of the significant demand for the St. Louis Renaissance Festival to benefit your cause! Your organization has the opportunity to sell advanced discounted tickets to the public, while keeping an agreed upon percentage of the commission. Your organization will be displayed on St. Louis Renaissance Festival's marketing materials.</p>
      <DownloadForm url={ticketForm}/>
    </>
  )
}

function DownloadForm(props) {
  return (
    <>
      <span>Click <a href={props.url} target='_blank' rel="noreferrer">here</a> to download the form. Contact <u>akuchar@renaissancefest.com</u> for more information or to submit your form.</span>
    </>
  )
}

export default Fundraising;
