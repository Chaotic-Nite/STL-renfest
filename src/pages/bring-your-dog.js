import React from "react";
import Navigation from "../components/navigation/Navigation.js";
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne";

function BringYourDog() {
  const DOG_RULES = [
    "All Dogs must be on a leash at all times",
    "Owners must clean up after their dogs",
    "Only one dog per owner will be allowed",
    "Dog Owners must report any accidents to first aid immediately",
    "All dogs must have their festival tag visible at all times",
    "Dogs are not allowed at the Feast of Fantasy",
  ];
  return (
    <>
      <Navigation />
      <h1 className="page-header">Bring Your Dog!</h1>
      <div className="margin-width two-col">
        <div>
          <h1 className="center-text">Dog Rules &#38; Registration</h1>
          <h2
            style={{ fontVariant: "small-caps", color: "red" }}
            className="center-text"
          >
            <b>Dogs Only!</b>
          </h2>
          <div className="ticket-boxes dog-box">
            <div className="dog-admissions">
              <ul className="ticket-ul">
                <li className="dog-header">Dog Admission</li>
                <li className="dog-price">$10 per pet with your own photo</li>
                <li className="dog-price">
                  $15 per pet if we take a photo for you
                </li>
                <li>
                  All service animals will be admitted into the St. Louis
                  Renaissance Festival in accordance with ADA Regulations and
                  the Missouri Human Rights Acts
                </li>

                <li style={{ fontVariant: "small-caps" }}>
                  <b>Cash Only</b>
                </li>
              </ul>
            </div>
          </div>
          <p className="center-text">
            To be eligible to bring your dog to the Festival the following term
            must be met:
          </p>
          <ol>
            <li>
              Fill out the{" "}
              <a
                href="../pdf-files/2020-Dog-Registration-Form.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Dog Registration Form
              </a>
            </li>
            <li>
              Bring Proof of Rabies Vaccination with dates in the one of the
              following forms:
              <ul>
                <li>Proof of shots from Veterinarian</li>
                <li>Tag on Pet with date of expiration</li>
                <li>Bring your dog to Dog Check-In prior to entry</li>
              </ul>
            </li>
          </ol>
          <h2 style={{ fontVariant: "small-caps" }}>Important Rules:</h2>
          <ul>
            <li style={{ color: "red" }}>
              Dogs Only! No other pets will be allowed on festival grounds
            </li>
            <li>
              <b>No puppies under the age of 6 months allowed</b>
              <ul>
                <li>
                  This is to protect the puppy, who has not received all of its
                  vaccinations yet and to protect all the other dogs at the
                  Festival, who could be susceptible to the puppy's potential
                  diseases.
                </li>
              </ul>
            </li>
            {DOG_RULES.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
        <div className="col2">
          <QuickLinksSetOne id={5} />
        </div>
      </div>
    </>
  );
}

export default BringYourDog;
