import React from "react";
import SocialMedia from "../components/social-media/SocialMedia";

function Tickets() {
  return (
    <>
      <h1 className="page-header">Tickets</h1>
      <div className="margin-width two-col">
        <div id="general-tickets" className="ticket-setup">
          <h2>Ticket Options</h2>
          <div className="ticket-boxes">
            <div className="ren-faire">
              <ul className="ticket-ul">
                <li className="ren-gen">Gate Admissions</li>
                <li>
                  <p className="t-title">Adults:</p>
                  <p className="t-price">$19.95</p>
                </li>
                <li>
                  <p className="t-title">Children (5-12 yrs):</p>
                  <p className="t-price">$12.95</p>
                </li>
                <li>
                  <p className="t-title">Senior/Student:</p>
                  <p className="t-price">$16.95</p>
                </li>
              </ul>
            </div>

            <div className="ren-faire">
              <ul className="ticket-ul">
                <li className="ren-gen">Advanced Tickets Online</li>
                <li>
                  <p className="t-title">Adults:</p>
                  <p className="t-price">$16.95</p>
                </li>
                <li>
                  <p className="t-title">Children (5-12 yrs):</p>
                  <p className="t-price">$10.95</p>
                </li>
                <li className="purchase-bttn">
                  <a
                    className="rf-la-bttn"
                    href="https://red.vendini.com/ticket-software.html?t=tix&e=e0ed81fb98a9796c57dded8c785150d5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Order Here
                  </a>
                </li>
              </ul>
            </div>

            <div className="ren-faire">
              <ul className="ticket-ul">
                <li className="ren-gen">Season Pass</li>
                <li>
                  <p className="t-title">Adults:</p>
                  <p className="t-price">$84.95</p>
                </li>
                <li>
                  <p className="t-title">Children (5-12 yrs):</p>
                  <p className="t-price">$49.95</p>
                </li>
                <li className="purchase-bttn">
                  <a
                    className="rf-la-bttn"
                    href="https://red.vendini.com/ticket-software.html?t=tix&e=725c321030840c23d87d540b4b7d87c6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Order Here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h4 style={{ color: "rgb(76, 0, 255)", marginTop: "0" }}>
            <i>Children 4 and under get in for free!</i>
          </h4>

          <h4>
            For Group Discounts of 10 or more: <br />
          </h4>
          <p className="ticket-contact">
            Please Contact akuchar@renaissancefest.com or call 636.639.5173
          </p>

          <h2 id="les-amis">Les Amis Packages</h2>
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
            <div className="les-amis">
              <ul className="les-ul">
                <li
                  className="les-header"
                  style={{
                    backgroundColor: "rgb(235, 204, 30)",
                    color: "rgb(15, 15, 15)",
                  }}
                >
                  Gold
                </li>
                <li className="les-price">$120</li>
                <li>1 Season Pass</li>
                <li>4 Complimentary Tickets</li>
                <li>1 Les Amis Shirt</li>
                <li>1 Les Amis Membership Medallion</li>
                <li>
                  VIP Gold Parking <br />
                  <i>*Please Note: VIP Parking is first come first serve</i>
                </li>
                <li className="purchase-bttn">
                  <a
                    className="rf-la-bttn"
                    href="https://red.vendini.com/ticket-software.html?e=51229aba0cf522dd834c02295d2a94d9&t=tix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Purchase Here
                  </a>
                </li>
              </ul>
            </div>

            <div className="les-amis">
              <ul className="les-ul">
                <li className="les-header">Friends</li>
                <li className="les-price">$54.95</li>
                <li>2 Complimentary Tickets</li>
                <li>1 Les Amis Shirt</li>
                <li className="purchase-bttn">
                  <a
                    className="rf-la-bttn"
                    href="https://red.vendini.com/ticket-software.html?t=tix&e=60fba7232c2125909c5e77cdb1e002c0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Purchase Here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h2>Corporate Partners</h2>
          <p>
            <a href="https://red.vendini.com/ticket-software.html?t=tix&e=e0ed81fb98a9796c57dded8c785150d5">
              Click here
            </a>
            and have your code ready to purchase tickets!
          </p>
          <div id="kegs" className="kne">
            <h2>Kegs 'N' Eggs Tickets</h2>
            <div className="ren-faire">
              <ul className="ticket-ul">
                <li className="ren-gen">Kegs 'N' Eggs Prices</li>
                <li>
                  <p className="t-title">Adults:</p>
                  <p className="t-price">$30.00</p>
                </li>
                <li>
                  <p className="t-title">Designated Driver:</p>
                  <p className="t-price">$15.00</p>
                </li>
                <li>
                  <p className="t-title">Dog:</p>
                  <p className="t-price">$10.00</p>
                </li>
                <li>
                  <a
                    className="rf-la-bttn"
                    href="https://red.vendini.com/ticket-software.html?t=tix&w=0cca8bf7e55835461a115685ac926ea3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Purchase Here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col2">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Tickets;
