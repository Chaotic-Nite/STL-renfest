import React, { useState, useEffect} from "react";
import { castList } from "../lists/castList.js";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Navigation from "../components/navigation/Navigation.js";

import { Link } from "react-router-dom";
import "../css/cast-warrior.css";

function Cast() {
  const guildArr = ["Court", "Fae", "Fighter", "Traveler", "Village"];
  const [width, setWidth] = useState(window.innerWidth);


  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024 ? true : false;

  return (
    <>
      <Navigation />
      <h1 className="page-header">Cast</h1>
      <div className="margin-width current">
        {guildArr.map((guild, j) => {
          return (
            <details key={guild} id={guild} className="guild">
              <summary>
                {guild} <br /> {castList[guild][0]}
              </summary>
              {castList[guild].slice(1).map((item) => {
                return (
                  isMobile ? (
                    <MDBCard key={item.realName} className="cast-list">
                    {" "}
                      <MDBCardImage
                          src={item.image}
                          alt={item.realName}
                          fluid
                          position='top'
                        />
                         <MDBCardBody className='mbl-cast'>
                          <MDBCardTitle className="cast-name">{item.realName}{" "}
                            {item.leadership ? (
                              <p className="guild-lead">
                                **{item.leadership}**
                              </p>
                            ) : null}</MDBCardTitle>
                          <MDBCardText className="cast-role">
                            {item.role}
                          </MDBCardText>
                          <MDBCardText className="cast-position">
                            {item.position}
                          </MDBCardText>
                        </MDBCardBody>
                  </MDBCard>
                  ) :( 
                  <MDBCard key={item.realName} className="cast-list">
                  {" "}
                    {console.log(item)}
                    <MDBRow className="cast-card">
                      <MDBCol md="4">
                      <MDBCardImage
                      src={item.image}
                      alt={item.realName}
                      fluid
                      />
                      </MDBCol>
                      <MDBCol md="8">
                        <MDBCardBody>
                        <MDBCardTitle className="cast-name">
                        {item.realName}{" "}
                        {item.leadership ? (
                          <p className="guild-lead">
                                **{item.leadership}**
                                </p>
                                ) : null}
                                </MDBCardTitle>
                                <MDBCardText className="cast-role">
                                {item.role}
                          </MDBCardText>
                          <MDBCardText className="cast-position">
                            {item.position}
                            </MDBCardText>
                            </MDBCardBody>
                      </MDBCol>
                      </MDBRow>
                      </MDBCard>));
              })}
            </details>
          );
        })}
      </div>
      <Link className="warriorLink" to="/warriors-island">
        Our Brave Warriors
      </Link>
    </>
  );
}

export default Cast;
