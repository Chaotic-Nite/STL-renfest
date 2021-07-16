import React, {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { weddingInfo, weddingFinePrint } from "../lists/wedding-info";
import Navigation from "../components/navigation/Navigation";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCollapse, MDBBtn, MDBRow
} from 'mdb-react-ui-kit';
import SocialMedia from "../components/social-media/SocialMedia";

function Weddings() {
  const [justifyActive, setJustifyActive] = useState('general-wedding');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <Navigation />
      <h1 className="page-header">Weddings</h1>
      <div className="margin-width">
        
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
            <div className='wedSetup'>
            <MDBTabs pills justify className='mb-3'>
                <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('general-wedding')} active={justifyActive === 'general-wedding'}>
                    General Info
                </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                <MDBTabsLink  onClick={() => handleJustifyClick('wedding-food-drink')} active={justifyActive === 'wedding-food-drink'}>
                    Food &#38; Drink
                </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === 'general-wedding'}><WeddingGeneral/></MDBTabsPane>
                <MDBTabsPane show={justifyActive === 'wedding-food-drink'}><WeddingFood /></MDBTabsPane>
            </MDBTabsContent>
             <hr />
            <WeddingPolicy />
            </div>
            <SocialMedia />
      </div>
    </>
  );
}

const WeddingGeneral = () => {
  return (
    <>
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
                            {item.price} {item.additional ? '| ' + item.additional: null}
                          </span>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </div>
    </>
  )
}

const WeddingFood = () => {
  const mainFood = weddingInfo.weddingMenu.main
  const appHot = weddingInfo.weddingMenu.appetizersHot
  const appCold = weddingInfo.weddingMenu.appetizersCold
  const partyPk = weddingInfo.weddingMenu.partyPackage
  const sndwchTray = weddingInfo.weddingMenu.sandwichTray
  const drinks = weddingInfo.drinks

  const [showFood, setShowFood] = useState(false);
  const [showDrink, setShowDrink] = useState(false);

  const toggleFood = () => setShowFood(!showFood);
  const toggleDrink = () => setShowDrink(!showDrink);

  return (
    <>
    <div className='wedding' id='wedMenu'>
      <div>
      <MDBBtn onClick={toggleFood}>Wedding Menu <br /> (Food)</MDBBtn>
      <MDBRow id='wedFood'>
        <MDBCollapse show={showFood} className='mt-3'>
          <h3>King's Feast</h3>
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
          <h3>Hot Appetizers</h3>
          <p><b>{appHot[0]}</b></p>
          <ListGroup>
            {appHot.map(item => {
              if (typeof item != 'string') {
                return (
                  <ListGroup.Item className='wedding-food'>
                      <span style={{ float: "left", paddingLeft: "1%" }}>{item.food}</span><span style={{ float: "right", paddingRight: "1%" }}>{item.price}</span>
                    </ListGroup.Item>
                  )
                }
                return null
              })}
          </ListGroup>
          <h3>Cold Appetizers</h3>
          <p><b>{appCold[0]}</b></p>
          <ListGroup>
            {appCold.map(item => {
              if (typeof item != 'string' && item.food) {
                return (
                  <ListGroup.Item className='wedding-food'>
                      <span style={{ float: "left", paddingLeft: "1%" }}>{item.food}</span><span style={{ float: "right", paddingRight: "1%" }}>{item.price}</span>
                    </ListGroup.Item>
                  )
                }
                return null
            })}
            <ListGroup.Item className='wedding-food'>
              {appCold[appCold.length-1].join(', ')}
            </ListGroup.Item>
          </ListGroup>
          <h3>Party Package</h3>
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
          <h3>Sandwich Trays</h3>
          <p style={{marginBottom: '2px'}}><i>Small feeds up to 10 people</i></p>
          <p style={{marginBottom: '2px'}}><i>Medium feeds up to 15 people</i></p>
          <p style={{marginBottom: '2px'}}><i>Large feeds up to 20 people</i></p>
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
                    fresh-made chicken salad or tuna salad with { item.additional.join(', ') } on { item.bread.slice(0, -1).join(',')+' and '+item.bread.slice(-1) } cut in { item.cut }.
                  </span>
                  <br />
                  {item.size.map((size) => {
                    return (<ul>
                      <li style={{marginBottom: '2px', marginTop: '2px'}}>{size.group} ${size.price}</li>
                    </ul>
                    )
                  })}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </MDBCollapse>
      </MDBRow>
      </div>
      <div>
      <MDBBtn onClick={toggleDrink}>Wedding Menu <br /> (Drink)</MDBBtn>
      <MDBRow id='wedDrinks'>
        <MDBCollapse show={showDrink} className='mt-3'>
        {drinks.nonAlcoholic.map(item => {
          return(
            <>
          <p  style={{marginBottom: '2px'}}><b>{item.name}</b></p>
          <p  style={{marginBottom: '2px'}}><i>{item.price}</i></p>
            <ListGroup>
              {item.drinks.map(drink => {
                return (
                  <ListGroup.Item className='wedding-food'>{drink}</ListGroup.Item>
                )
              })}
            </ListGroup>
            </>
        )})

        }
        <h3>Alcoholic Beverages</h3>
        {drinks.alcoholics.map(item => {
          return (
            <>
              <p  style={{marginBottom: '2px'}}><b>{item.name}</b></p>
              <p  style={{marginBottom: '2px'}}><i>{item.byline}</i></p>
              <ListGroup>
                {item.drink.map(i => {
                return (
                  <ListGroup.Item className='wedding-food'><span style={{ float: "left", paddingLeft: "1%" }}>{i.name}</span><span style={{ float: "right", paddingRight: "1%" }}>${i.price}</span></ListGroup.Item>
                )
              })}
              </ListGroup>
            </>
          )
        })}
        </MDBCollapse>
      </MDBRow>
      </div>
    </div>
    </>
  )
}

const WeddingPolicy = () => {
  const [showFinePrint, setShowFinePrint] = useState(false);

  const toggleFinePrint = () => setShowFinePrint(!showFinePrint);
  
  return (
    <>
      <div className='wedding'>
      <MDBBtn onClick={toggleFinePrint}>The Fine Print</MDBBtn>
        <MDBRow id='weddingFinePrint'>
          <MDBCollapse show={showFinePrint} className='mt-3'>
          {weddingFinePrint.map(item => {
            return (
              <>
                    <h3 className='finePrint'><b>{item.name}</b></h3>
                  <ListGroup>
                  <ListGroup.Item className='wedding-food' style={{textAlign: 'left'}}>
                    {item.description}</ListGroup.Item>
                  </ListGroup>
              </>
            )
          })}
          </MDBCollapse>
        </MDBRow>
      </div>
    </>
  )
}

export default Weddings;
