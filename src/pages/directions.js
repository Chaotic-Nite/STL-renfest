import React, { useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import Base64Downloader from "react-base64-downloader";
import Navigation from "../components/navigation/Navigation.js";
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne.js";
import fairemap from '../images/STLFaireMap.jpg'

function Directions() {
  const [justifyActive, setJustifyActive] = useState('to_faire');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  return (
    <>
     <Navigation />
      <h1 className="page-header">Directions</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
          <MDBTabs pills justify className='mb-3'>
              <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('to_faire')} active={justifyActive === 'to_faire'}>
                  To the Faire
              </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
              <MDBTabsLink  onClick={() => handleJustifyClick('faire_map')} active={justifyActive === 'faire_map'}>
                  Faire Map
              </MDBTabsLink>
              </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
              <MDBTabsPane show={justifyActive === 'to_faire'}><DirectionToFaire/></MDBTabsPane>
              <MDBTabsPane show={justifyActive === 'faire_map'}><FaireMap /></MDBTabsPane>
          </MDBTabsContent>
          </div>
          <div className="col2">
            <QuickLinksSetOne id={7} />
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
    toDataURL(fairemap).then((dataUrl) => {
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
          src={fairemap}
          alt="Faire Site Map"
        />
        <div style={{ marginLeft: "5vw", marginTop: "2%"}}>
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
        <div className='written-direction'>
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
