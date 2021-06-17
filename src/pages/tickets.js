import React from "react";
import Navigation from "../components/navigation/Navigation";
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne";
import {externalLinks} from '../lists/outsideLinks'
import { MDBCard, 
  MDBCardHeader, 
  MDBTable,
  MDBTableBody,
  MDBBtn } from 'mdb-react-ui-kit';



function Tickets() {
  return (
    <>
      <Navigation />
      <h1 className="page-header">Tickets</h1>
      <div className="margin-width">
        <div className=" two-col">
          <div className="col1-width">
            <div className="ticket-setup">
            <span id="general-tickets"> &nbsp;</span>
              <div class='flex-down'><GeneralTicket /></div>
            <span id="les-amis"> &nbsp; </span>
              <div ><LesAmisTicket /></div>
              <h2>Corporate Partners</h2>
              <p>
                <a href={externalLinks.advancedTickets} target='_blank' rel="noreferrer">
                  Click here
                </a>{" "}
                and have your code ready to purchase tickets!
              </p>
            <span id="kegs"> &nbsp; </span>
              <div  className="kne">
               <KegsTicket />
              </div>
            </div>
          </div>
          <div className="col2">
           <QuickLinksSetOne id={2} />
          </div>
        </div>
      </div>
    </>
  );
}

function GeneralTicket() {
  return (
    <>
      <h2>Ticket Options</h2>
      <div className="ticket-boxes">
        <MDBCard className='ren-faire ticket-ul'>
          <MDBCardHeader className='ren-gen'><b>Gate Admissions</b></MDBCardHeader>
          <MDBTable striped hover>
            <MDBTableBody>
              <tr>
                <th scope='row'>Adults:</th>
                <td>$19.95</td>
              </tr>
              <tr>
                <th scope='row'>Children (5-12 yrs):</th>
                <td>$12.95</td>
              </tr>
              <tr>
                <th scope='row'>Senior/Student:</th>
                <td>$16.95</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCard>
        <MDBCard className='ren-faire ticket-ul'>
          <MDBCardHeader className='ren-gen'><b>Advanced Tickets Online</b></MDBCardHeader>
          <MDBTable striped hover>
            <MDBTableBody >
              <tr>
                <th >Adults:</th>
                <td>$16.95</td>
              </tr>
              <tr>
                <th >Children (5-12 yrs):</th>
                <td>$10.95</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <a
            className="purchase-bttn"
            href={externalLinks.advancedTickets}
            target="_blank"
            rel="noreferrer"
          ><MDBBtn color='warning'>
            Order Here
          </MDBBtn>
          </a>
        </MDBCard>
        <MDBCard className='ren-faire ticket-ul'>
          <MDBCardHeader className='ren-gen'><b>Season Pass</b></MDBCardHeader>
          <MDBTable striped hover>
            <MDBTableBody >
              <tr>
                <th scope='row'>Adults:</th>
                <td>$84.95</td>
              </tr>
              <tr>
                <th scope='row'>Children (5-12 yrs):</th>
                <td>$49.95</td>
              </tr>
              <tr >
              </tr>
            </MDBTableBody>
          </MDBTable>
          <a
            href={externalLinks.seasonPass}
            target="_blank"
            rel="noreferrer"
          ><MDBBtn color='warning' className="purchase-bttn">
            Order Here
          </MDBBtn>
          </a>
        </MDBCard>
        
      </div>
      <h4 style={{ color: "rgb(76, 0, 255)", marginTop: "0" }}>
        <i>Children 4 and under get in for free!</i>
      </h4>

      <h4>
        For Group Discounts of 10 or more: <br />
      </h4>
      <p className="ticket-contact">
        <i>
          Please Contact <u>akuchar@renaissancefest.com</u> or call{" "}
          <b>636.639.5173</b>
        </i>
      </p>
      </>
  )
}

function LesAmisTicket() {
  return (
    <>
    <h2>Les Amis Packages</h2>
    <h3 id="le-amis-title">
      <i>"Friends of the Festival"</i>
    </h3>
    <p>
      Want free, guaranteed seating in our private garden?
      <br />
      Purchase one of our Les Amis packages for the festival!
      <br />
      Includes snacks, cold water and/or lemonade, private handicap
      privies and more!
    </p>
    <div className="ticket-boxes">
        <MDBCard className='les-amis les-ul'>
          <MDBCardHeader background='warning' className='les-header'><b>Gold</b></MDBCardHeader>
          <MDBTable striped hover>
            <MDBTableBody >
              <tr>
                <td>$120</td>
              </tr>
              <tr>
                <td>1 Season Pass</td>
              </tr>
              <tr>
                <td>4 Complimentary Tickets</td>
              </tr>
              <tr>
                <td>1 Les Amis Shirt</td>
              </tr>
              <tr>
                <td>1 Les Amis Membership Medallion</td>
              </tr>
              <tr>
                <td>VIP Gold Parking <br />
            <i>*Please Note: VIP Parking is first come first serve</i></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <a
            className="purchase-bttn"
            href={externalLinks.lesAmis}
            target="_blank"
            rel="noreferrer"
          ><MDBBtn color='warning'>
            Order Here
          </MDBBtn>
          </a>
        </MDBCard>

      
    </div>

    </>
  )
}

function KegsTicket() {
  return (
    <>
      <h2>Kegs 'N' Eggs Tickets</h2>
        <div className="ren-faire ">
        <MDBCard className='kne ticket-ul'>
          <MDBCardHeader className='ren-gen'><b>Kegs 'N' Eggs Prices</b></MDBCardHeader>
          <MDBTable striped hover>
            <MDBTableBody >
              <tr>
                <th>Adults:</th>
                <td>$30.00</td>
              </tr>
              
              <tr>
                <th>Designated Driver:</th>
                <td>$15.00</td>
              </tr>
              
              <tr>
                <th>Dog:</th>
                <td>$10.00</td>
              </tr>
              
            </MDBTableBody>
          </MDBTable>
          <a
            className="purchase-bttn"
            href={externalLinks.kegTickets}
            target="_blank"
            rel="noreferrer"
          ><MDBBtn color='warning'>
            Order Here
          </MDBBtn>
          </a>
        </MDBCard>
        </div>
    </>
  )
}

export default Tickets;
