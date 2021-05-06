import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { weddingInfo, weddingFinePrint } from "../lists/wedding-info";

function Weddings() {
  return (
    <>
      <h1 className="page-header">Weddings</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <p>
              Ever thought about getting married at the Renaissance Festival? We
              can help! With a full-time staff member to help with catering,
              day-of logistics, and so much more, we can help make this day less
              stressful and more magical.
            </p>
            <br />
            <p>
              <b>
                Contact Amanda Kuchar at akunchar@renaissancefest.com for more
                information or with questions!
              </b>
            </p>
            <div style={{ display: "flex" }}>
              <div className="wedding" id="wedLocation">
                <ListGroup>
                  {weddingInfo.location.map((location) => {
                    return (
                      <ListGroup.Item
                        className="weddingPlace"
                        style={{ width: "120%" }}
                      >
                        <span style={{ float: "left", paddingRight: "1%" }}>
                          {location.place}
                        </span>
                        <span style={{ float: "right" }}>
                          ${location.chargePerHour} per 1 hour of service |
                          seats up to {location.capacity}
                        </span>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weddings;
