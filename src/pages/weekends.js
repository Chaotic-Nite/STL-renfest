import React, { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'



function Weekends(props) {
  const location = useLocation();
  console.log(location.href);
  const initialState = props.location.wknd ? props.location.wknd : 'first-tab';
  const [wknd, setWknd] = useState(initialState)
  const handleTabClick = (value) => {
    if (value === wknd) {
      return;
    }

    setWknd(value);
  };

  return (
    <>
      <Navigation />
      <h1 className="page-header">Themed Weekends</h1>
      <div className="margin-width">
        <div className="two-col">
          <div >
            <MDBTabs fill className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('first-tab')} active={wknd === 'first-tab'}>
                  Highland Fling
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('second-tab')} active={wknd === 'second-tab'}>
                  Pets &#38; Pirates
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('third-tab')} active={wknd === 'third-tab'}>
                  Shenanigans &#38; Sweet Romance 
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('fourth-tab')} active={wknd === 'fourth-tab'}>
                  Viking &#38; Cosplay 
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('fifth-tab')} active={wknd === 'fifth-tab'}>
                  Oktoberfest
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleTabClick('sixth-tab')} active={wknd === 'sixth-tab'}>
                  Fesitive Shopping Day
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={wknd === 'first-tab'}><FrstWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'second-tab'}><ScndWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'third-tab'}><ThrdWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'fourth-tab'}><FrthWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'fifth-tab'}><FfthWknd/></MDBTabsPane>
            <MDBTabsPane show={wknd === 'sixth-tab'}><ShopDay/></MDBTabsPane>
          </MDBTabsContent>
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

export default Weekends;
