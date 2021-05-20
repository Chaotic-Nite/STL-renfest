import { nodeName } from "jquery";
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
            <div style={{ display: "flex" , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <div className="wedding" id="wedLocation">
                <h2>Selection of Locations</h2>
                <ListGroup>
                  {weddingInfo.location.map((location) => {
                    return (
                      <ListGroup.Item className="wedding-piece">
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
                  <ListGroup.Item className="wedding-piece">
                    *Other areas available upon request.
                  </ListGroup.Item>
                  <ListGroup.Item className="wedding-piece">
                    *Ceremony times subject to change based on stage schedules.{" "}
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className="wedding" id="wedReception">
                <h2>Reception &#38; Private Party</h2>
                <ListGroup>
                  {weddingInfo.reception.map((reception) => {
                    return (
                      <ListGroup.Item className="wedding-piece">
                        <span style={{ float: "left", paddingRight: "1%" }}>
                          {reception.place}
                        </span>
                        <span style={{ float: "right" }}>
                          ${reception.charge} per {reception.per} |{" "}
                          {reception.inclusive
                            ? `All-inclusive for ${reception.capacity}`
                            : `Seats up to ${reception.capacity}`}{" "}
                        </span>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
              <div className='wedding' id='wedSpecial'>
                <h2>Special Event &#38; Wedding Package</h2>
                <h3>À La Carte</h3>
                <ListGroup>
                  {weddingInfo.special.map((item) => {
                      return (
                        <ListGroup.Item className="wedding-piece">
                          <span style={{ float: "left", paddingRight: "1%" }}>
                            {item.item}
                          </span>
                          <span style={{ float: "right" }}>
                            {item.price} | {item.additional}
                          </span>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </div>
              <div className='wedding' id='wedMenu'>
                <WeddingFood />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const WeddingFood = () => {
  const mainFood = weddingInfo.weddingMenu.main
  const appHot = weddingInfo.weddingMenu.appetizersHot
  const appCold = weddingInfo.weddingMenu.appetizersCold
  const partyPk = weddingInfo.weddingMenu.partyPackage
  const sndwchTray = weddingInfo.weddingMenu.sandwichTray
  const drinks = weddingInfo.weddingMenu.drinks
  return (

                <details>
                    <summary>
                      <h2>Wedding Menu (Food)</h2>
                    </summary>
                    <h3><b>King's Feast</b></h3>
                    <p><b>{mainFood.price}</b></p>
                    <ListGroup>
                      <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Salad</b>
                          <br />
                          {mainFood.salad}
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Entree</b>
                          <br />
                          {mainFood.entree}
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Vegetable</b>
                          <br />
                          {mainFood.vegetable}
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Starch</b>
                          <br />
                          {mainFood.starch}
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Dessert Tray</b>
                          <br />
                          {mainFood.dessertTray}
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>
                        <span >
                          <b>Beverage Station</b>
                          <br />
                          <ul style={{listStyle: 'none'}}>
                          {mainFood.beverageStation.map((item) => {
                            return (
                                <li>{item}</li>
                              )
                            })}
                            </ul>
                        </span>
                        </ListGroup.Item>
                        <ListGroup.Item className='wedding-food'>

                    <i>*An 18% gratuity and an 8.65% Missouri Sales Tax is applicable to all food and beverage charges. All caterings are priced for parties 10 or more. Please contact us for smaller parties. </i>
                        </ListGroup.Item>
                    </ListGroup>
                    <h3><b>Hot Appetizers</b></h3>
                    <p><b>{appHot[0]}</b></p>
                    <ListGroup>
                      {appHot.map(item => {
                          {if (typeof item != 'string') {
                            return (
                              <ListGroup.Item className='wedding-food'>
                                <span style={{ float: "left", paddingRight: "1%" }}>{item.food}</span><span style={{ float: "right" }}>{item.price}</span>
                              </ListGroup.Item>
                            )
                          }}
                      })}
                    </ListGroup>
                    <h3><b>Cold Appetizers</b></h3>
                    <p><b>{appCold[0]}</b></p>
                    <ListGroup>
                      {appCold.map(item => {
                          {if (typeof item != 'string' && item.food) {
                            return (
                              <ListGroup.Item className='wedding-food'>
                                <span style={{ float: "left", paddingRight: "1%" }}>{item.food}</span><span style={{ float: "right" }}>{item.price}</span>
                              </ListGroup.Item>
                            )
                          }}
                      })}
                      <ListGroup.Item className='wedding-food'>
                        {appCold[appCold.length-1].join(', ')}
                      </ListGroup.Item>
                    </ListGroup>
                    <h3><b>Party Package</b></h3>
                    <p style={{marginBottom: '2px'}}><b>$200 for (1-10 adults/children)</b></p>
                    <p><i>Additional guests: $16 per adult or $12 per child</i></p>
                    <ListGroup>
                      {partyPk.map((item) => {
                        return (
                          <ListGroup.Item className='wedding-food' style={{textAlign: 'left'}}>
                            <span>
                              <b>{item.title} Lunchoen</b>
                            </span>
                            <br />
                            <span>
                              <b>Main Course:</b> {item.mainFood}
                            </span>
                            <br />
                            <span>
                              <b>Additional:</b> {item.additional.join(', ')}
                            </span>
                            <br />
                            <span>
                              Will also recieve a visit from one or more of our <b>{item.visitFrom}</b>
                            </span>
                          </ListGroup.Item>
                        )
                      })}
                    </ListGroup>
                    <h3><b>Sandwich Trays</b></h3>
                    <p><i>Small feeds up to 10 people</i></p>
                    <p><i>Medium feeds up to 15 people</i></p>
                    <p><i>Large feeds up to 20 people</i></p>
                    <ListGroup>
                      {sndwchTray.map((item) => {
                        return (
                          <ListGroup.Item className='wedding-food'>
                            <span>
                              <b>{ item.name }</b>
                            </span>
                              <br />
                            <span>
                              Includes sandwiches filled with a variety of sliced meats such as turkey breast, premium ham, roast beef,
                              fresh-made chicken salad or tuna salad with { item.additional.join(', ') } on { item.bread.slice(0, -1).join(',')+' and '+item.bread.slice(-1) }.
                            </span>
                          </ListGroup.Item>
                        )
                      })}
                    </ListGroup>
                </details>
  )
}

export default Weddings;
