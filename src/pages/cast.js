import React, { useState, useEffect} from "react";
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

import amber_fern from '../images/cast/amber-fern.jpg'
import brendan_noe from '../images/cast/brendan-noe.jpg'
import catherine_kuehner from '../images/cast/catherine-kuehner.jpg'
import chris_siebert from '../images/cast/chris-siebert.jpg'
import dann_blinn from '../images/cast/dan-blinn-placeholder.jpg'
import david_edwards from '../images/cast/david-edwards.jpg'
import david_hernandez from '../images/cast/david-hernandez.jpg'
import grace_mays from '../images/cast/grace-mays.jpg'
import jacqueline_brown from '../images/cast/jacqueline-brown.jpg'
import james_boswell from '../images/cast/james-boswell.jpg'
import jason_smallen from '../images/cast/jason-smallen.jpg'
import joseph_fieger_sr from '../images/cast/joseph-fieger-sr.jpg'
import kathleen_mitchell from '../images/cast/kathleen-mitchell.jpg'
import kathleen_whalen from '../images/cast/kathleen-whalen.jpg'
import kathryn_smallen from '../images/cast/kathryn-smallen.jpg'
import krista_strahm from '../images/cast/krista-strahm.jpg'
import kristen_haynes from '../images/cast/kristen-haynes.jpg'
import lanya_da_silva from '../images/cast/lanya-da-silva.jpg'
import noel_kling from '../images/cast/noel-kling.jpg'
import sheana_godwin from '../images/cast/sheana-godwin.jpg'
import susanna_ennenbach from '../images/cast/susanna-ennenbach.jpg'
import ted_jander from '../images/cast/ted-jander.jpg'
import trenton_brookesher from '../images/cast/trenton-brookesher.jpg'
import zak_gilliland from '../images/cast/zak-gilliland.jpg'


const castList = {
  Court: [
    "The royalty and noblity at the faire grounds. They perform they're noble duties whilst running amok in the crowds.",
    {
      realName: "Joseph Fieger Sr",
      role: "Thomas Wolsey",
      position: "Cardinal of England",
      image: joseph_fieger_sr,
    },
    {
      realName: "David Edwards",
      role: "King Henry VIII",
      position:
        "By the Grace of God, King of England and France, Defender of the Faith and Lord of Ireland",
      image: david_edwards,
    },
    {
      realName: "Ted Jander",
      role: "King Francois",
      position: "King of France, Duke of Brittany",
      image: ted_jander,
    },
    {
      realName: "Kathleen Mitchell",
      role: "Queen Katherine of Aragon",
      position: "Queen Consort of England, Princess of Spain",
      image: kathleen_mitchell,
    },
    {
      realName: "Lanya da Silva",
      role: "Queen Claude",
      position:
        "Queen de France, Duchess of Britanny,  Holy Roman Empress, Empress of the Universe, Queen of England, Spain and EVERYTHING, Duchess of Milan",
      image: lanya_da_silva,
    }, //Con. positions: Holy Roman Empress, Empress of the Universe, Queen of England, Spain and EVERYTHING, Duchess of Milan
    {
      realName: "Trenton Brookesher",
      role: "Prince Henri",
      position: "Dauphin of France, Dauphin of Viennois",
      image: trenton_brookesher,
    },
    {
      realName: "Jacqueline Brown",
      role: "Princess Mary",
      position: "Crown Princess of England",
      image: jacqueline_brown,
    },
    {
      realName: "Kat Whalen",
      role: "Princess Catherine",
      position:
      "Princess of Portugal and Spain, ArchDuchess of Austria, Duchess of Braganza",
      image: kathleen_whalen,
      leadership: "Court Guild Lead",
    },
    {
      realName: 'Brendan Noe',
      role: "Anne de Montomrency",
      position: '',
      image: brendan_noe,
    },
    {
      realName: "Jason Smallen",
      role: "Sir William Carey",
      position: "",
      image: jason_smallen,
    },
    {
      realName: "Sheana Godwin",
      role: "",
      position: "Duchess",
      image: sheana_godwin,
    },
    {
      realName: "Kristen Haynes",
      role: "Anne Boleyn",
      position: "Lady in Waiting",
      image: kristen_haynes,
    },
    {
      realName: "Amber Fern",
      role: "Jane Seymour",
      position: "Lady in Waiting",
      image: amber_fern,
    },
    {
      realName: "Zak Gilliland",
      role: "Richard",
      position: "Noble Assistant",
      image: zak_gilliland,
    },

    {
      realName: "Chris Siebert",
      role: "Harold",
      position: "Herald",
      image: chris_siebert,
    },
    {
      realName: "Kathryn Smallen",
      role: "",
      position: "English Royal Guard",
      image: kathryn_smallen,
    },
    {
      realName: "James Boswell",
      role: "",
      position: "French Royal Guard",
      image: james_boswell,
    },
  ],
  Fae: [
    "The fairies, elves, and mystic beings who bring life to the wilderness.",
  ],
  Fighter: [
    "The fighters are the ones who intent to put on a show in the lanes with some form of weaponry.",
    {
      realName: "Dan Blinn",
      role: "Reynold",
      position: "Hired Mercenary",
      image: dann_blinn,
      leadership: "Fight Director",
    },
    {
      realName: "Noel Kling",
      role: "Griffin Morecotte",
      position: "Kingsman",
      image: noel_kling,
    },
  ],
  Traveler: [
    "The traders, craftmaen, entertainers, and their own brand of royalty as they're their own traveling village.",
    {
      realName: "David Hernandez",
      role: "Mauritz",
      position: "Hunter/Tradesman",
      image: david_hernandez,
    },
    {
      realName: "Susanna Ennenbach",
      role: "Sasha",
      position: "Herbalist",
      image: susanna_ennenbach,
    },
    {
      realName: "Catherine Kuehner",
      role: "Volyana",
      position: "Entertainer",
      image: catherine_kuehner,
    },
    {
      realName: "Grace Mays",
      role: "Katerina",
      position: "",
      image: grace_mays,
    },
    {
      realName: "Krista Strahm",
      role: "Zelma",
      position: "Matriarch",
      image: krista_strahm,
      leadership: "Traveler Guild Lead",
    },
  ],
  Village: [
    "Those who enjoy their day to day live in Petit Lyon with crafts and simple peace of the festivals.",
  ],
};

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
                          <MDBCardTitle className="cast-name">
                            <p>{item.realName}</p>{" "}
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
