import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Base64Downloader from "react-base64-downloader";
import Navigation from "../components/navigation/Navigation.js";
import SocialMedia from "../components/social-media/SocialMedia";

function Directions() {
  const [googleMap, setGoogleMap] = useState(true);

  return (
    <>
     <Navigation />
      <h1 className="page-header">Directions</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <ButtonGroup aria-label="Basic example" size="lg">
              <Button
                variant="secondary"
                onClick={() => setGoogleMap(true)}
                id="frst-bttn"
              >
                To the Faire
              </Button>
              <Button variant="secondary" onClick={() => setGoogleMap(false)}>
                Faire Site Map
              </Button>
            </ButtonGroup>
            {googleMap ? <DirectionToFaire /> : <FaireMap />}
          </div>
          <div className="col2">
            <h3 className="col2-header">Plan Your Visit</h3>
            <Link className="col2-link" to="/about-us">
              About Us
            </Link>
            <br />
            <Link className="col2-link" to="/key-policies">
              Key Policies
            </Link>
            <br />
            <Link className="col2-link" to="/tickets">
              Get Tickets
            </Link>
            <br />
            <Link className="col2-link" to="/contests-promotions">
              Contest &#38; Promotions
            </Link>
            <br />
            <Link className="col2-link" to="/bring-your-dog">
              Bring Your Dog
            </Link>
            <br />
            <Link className="col2-link" to="/find-hotels">
              Find a hotel
            </Link>
            <br />
            <Link className="col2-link" to="/faq">
              FAQ
            </Link>

            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

function FaireMap() {
  const [base64, setBase64] = useState("");
  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  useEffect(() => {
    toDataURL("/assets/images/STLFaireMap.jpg").then((dataUrl) => {
      setBase64(dataUrl);
    });
  }, []);

  return (
    <>
      <h2 className="second-header" style={{ fontSize: "2.3rem" }}>
        Faire Site Map
      </h2>
      <div className="direction-set">
        <img
          id="map"
          title="map"
          src="/assets/images/STLFaireMap.jpg"
          alt="Faire Site Map"
        />
        <div style={{ marginLeft: "5vw", marginTop: "2%", fontSize: "1.3vw" }}>
          <p>
            If image isn't loading or <br /> you'd prefer an offline copy.{" "}
            <br /> <br /> Download the current map{" "}
            <Base64Downloader
              base64={base64}
              downloadName="STLFaireMap"
              Tag="a"
              extraAttributes={{ href: "#" }}
              className="my-class-name"
              onDownloadSuccess={() => console.log("File download initiated")}
              onDownloadError={() => console.warn("Download failed to start")}
            >
              here
            </Base64Downloader>
          </p>
        </div>
      </div>
    </>
  );
}

function DirectionToFaire() {
  return (
    <>
      <h2 className="second-header" style={{ fontSize: "2.3rem" }}>
        To The Faire
      </h2>
      <div className="direction-set">
        <iframe
          title="map"
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.1727584314367!2d-90.91781618465168!3d38.828504179581365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87deb810190c5b07%3A0x62362b98892f47f1!2s2577+W+Meyer+Rd%2C+Foristell%2C+MO+63348!5e0!3m2!1sen!2sus!4v1502466604621"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <div style={{ marginLeft: "5vw", marginTop: "2%" }}>
          <h3>
            <b>
              Rotary Park
              <br />
              2577 West Meyer Road
              <br />
              Wentzville, MO 63386
            </b>
          </h3>
          <br />
          <h4>
            {" "}
            <b>Westbound:</b> <br />{" "}
          </h4>
          <ol className="direct-list">
            <li>
              Take I-70 West from STL (or Hwy 4 to I-70W) toward Wentzville to
              61 North.
            </li>
            <li>Take the Wentzville Parkway exit.</li>
            <li>Turn Left onto Wentzville Parkway.</li>
            <li>At West Meyer Road turn right.</li>
            <li>Continue to Rotary Park on the Right.</li>
          </ol>
          <br />

          <h4>
            <b>Eastbound:</b>
            <br />
          </h4>
          <ol className="direct-list">
            <li>
              Take I-70 East from Kansas City toward Wentzville to 61 North.
            </li>
            <li>Take the Wentzville Parkway exit.</li>
            <li>Turn left onto Wentzville Parkway.</li>
            <li>At West Meyer Road turn right.</li>
            <li>Continue to Rotary Park on the right.</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Directions;
