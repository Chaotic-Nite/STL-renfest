import React from "react";
import {castList} from "../castList.js";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom'
import '../css/cast-warrior.css'

function Cast() {
  const guildArr = ["Court", "Fae", "Fighter", "Traveler", "Village"];

  return (
    <div className='margin-width current'>
      {guildArr.map((guild, j) => {
        return (
          <details key={guild} className={guild}>
            <summary>{guild}</summary>
            {castList[guild].map((item, i) => {
              let type = typeof item;
              return type === "string" ? (
                <p key={j} >{item}</p>
              ) : (
                  <MDBCard key={item.realName} className="cast-list">
                    <MDBRow className='cast-card'>
                      <MDBCol md='4'>
                        <MDBCardImage src={item.image} alt={item.realName} className="cast-image" fluid/>
                      </MDBCol>
                      <MDBCol md='8'>
                        <MDBCardBody>
                          {item.leadership ? <MDBCardTitle>{item.leadership}</MDBCardTitle>: null}
                          <MDBCardTitle className="cast-name">{item.realName}</MDBCardTitle>
                          <MDBCardText className="cast-role">{item.role}</MDBCardText >
                          <MDBCardText className="cast-position">{ item.position}</MDBCardText >
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                </MDBCard>
              );
            })}
          </details>
        );
      })}
      <Link to='/warriors-island'>Our Brave Warriors</Link>
    </div>
  );
}

export default Cast;
