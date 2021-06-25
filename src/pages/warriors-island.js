import React from "react";
import { warriors } from "../lists/warriorList.js";
import IslandSign from "../images/warrior-island-sign.jpg";
import FlippedDivider from "../images/fancy-divider-flipped.png";
import Divider from "../images/fancy-divider.png";
import "../css/cast-warrior.css";
import Navigation from "../components/navigation/Navigation.js";

function WarriorsIsland() {
  return (
    <>
    <Navigation />
      <h1 className="page-header">Warriors Island</h1>
      <div id="warrior" className="margin-width">
        <div
          className="warriors"
          id="warriors"
          style={{ backgroundImage: { FlippedDivider } }}
        >
          <h2>In Memory</h2>
          <p className="warrior-text" style={{ backgroundImage: { Divider } }}>
            Of the volunteers of the <br />
            <b>St. Louis Renaissance Faire &#38; Festival</b> <br />
            that poured their heart's and soul's into building this village
            <br />
            in order to entertain and educate our patrons. <br />
            And while their spirits may have moved on, <br />
            the love and bonds that helped create this magical place <br />
            are always in our hearts.
          </p>
          {warriors.map((warrior) => {
            return <p className="warrior">{warrior}</p>;
          })}
        </div>
        <img id="warrior-sign" src={IslandSign} alt="STL Warrior Island Sign" />
      </div>
    </>
  );
}

export default WarriorsIsland;
