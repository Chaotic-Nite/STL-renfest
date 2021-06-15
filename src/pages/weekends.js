import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'



function Weekends() {
  const location = useLocation();
  let initialState = 'highland-fling';
  if (location.hash.length > 0) {
    initialState = location.hash.substring(1);
  }
  const [wknd, setWknd] = useState(initialState)
  const handleTabClick = (value) => {
    if (value === wknd) {
      return;
    }

    setWknd(value);
  };

  useEffect(() => {
    if (wknd !== location.hash.substring(1) && location.hash.includes('#')){
      setWknd(location.hash.substring(1))
    } else if (!location.hash.includes('#')) {
      setWknd('highland-fling')
    }

    // eslint-disable-next-line
  }, [location]);


  return (
    <>
      <Navigation />
      <h1 className="page-header">Themed Weekends</h1>
      <div className="margin-width">
        <div className="two-col weekends">
          <div >
            <MDBTabs fill className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('highland-fling')} active={wknd === 'highland-fling'}>
                  Highland Fling
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('pets-pirate-ale')} active={wknd === 'pets-pirate-ale'}>
                  Pets &#38; Pirates
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('shamrocks-shenanigans')} active={wknd === 'shamrocks-shenanigans'}>
                  Shenanigans &#38; Sweet Romance 
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('viking-invasion')} active={wknd === 'viking-invasion'}>
                  Viking &#38; Cosplay 
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('oktoberfest')} active={wknd === 'oktoberfest'}>
                  Oktoberfest
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('festive-shopping-day')} active={wknd === 'festive-shopping-day'}>
                  Festive Shopping Day
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={wknd === 'highland-fling'}><FrstWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'pets-pirate-ale'}><ScndWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'shamrocks-shenanigans'}><ThrdWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'viking-invasion'}><FrthWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'oktoberfest'}><FfthWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'festive-shopping-day'}><ShopDay/></MDBTabsPane>
          </MDBTabsContent>
          <JoustSchedule />
          </div>
          <div className="col2">
            <h3 className="col2-header">Weekend Information</h3>
          </div>
        </div>
      </div>
    </>
  );
}

function FrstWknd() {
  return (
    <>
      <h1>Default First</h1>
    </>
  )
}
function ScndWknd() {
  return (
    <>
      <h1>Pets and Ale</h1>
    </>
  )
}
function ThrdWknd() {
  return (
    <>
    </>
  )
}
function FrthWknd() {
  return (
    <>
    </>
  )
}
function FfthWknd() {
  return (
    <>
    </>
  )
}
function ShopDay() {
  return (
    <>
    </>
  )
}

function JoustSchedule() {
  return (
    <>
    <div className='joust tablediv'>
      <MDBTable striped hover className='joust'>
      <MDBTableHead>
        <tr>
          <th colSpan={2}><b>Joust Field</b></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>11:30</th>
          <td>Nobilis Equus Joust</td>
        </tr>
        <tr>
          <th scope='row'>2:00</th>
          <td>Nobilis Equus Joust</td>
        </tr>
        <tr>
          <th scope='row'>4:00</th>
          <td >Nobilis Equus Joust</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  )
}

export default Weekends;
