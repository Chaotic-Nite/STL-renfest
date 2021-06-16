import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import ScheduleTable from "../components/scheduletable/ScheduleTable";
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
import { dateObject } from "../lists/UPTODATE";


var pavilion = {class_name: 'rp-stage', title: 'Royal Pavilion', schedule: [{name: 'Coming Soon', time: ''}]}
var stLouis = {class_name: 'stl-stage', title: 'St Louis Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var owain = {class_name: 'o-stage', title: 'Owain Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var friendship = {class_name: 'f-stage', title: 'Friendship Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var joanOfArc = {class_name: 'joa-stage', title: 'Joan of Arc', schedule: [{name: 'Coming Soon', time: ''}]}
var marcoPolo = {class_name: 'mp-stage', title: 'Marco Polo Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var storytelling = {class_name: 'st-stage', title: 'Storytelling Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var knights = {class_name: 'kp-stage', title: 'Knights Pub Stage', schedule: [{name: 'Coming Soon', time: ''}]}
var pirates = {class_name: 'p-stage', title: 'Pirate Ship', schedule: [{name: 'Coming Soon', time: ''}]}

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
        <div className="two-col weekends" >
          <div id='weekend'>
            <MDBTabs pills justify className='mb-3'>
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
          <h3>Contests Coming Soon</h3>
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
      <div className='weekends'>
      <h1><b>Highland Fling</b></h1>
      <h3>{dateObject.wkndList[0]}</h3>

      <div className='stages'> 
        <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
        <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
        <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
        <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
        <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
        <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
        <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
        <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
        <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
      </div>
        <JoustSchedule />
      </div>
    </>
  )
}
function ScndWknd() {
 return (
    <>
    <div className='weekends'>
      <h1><b>Pets, Pirates &#38; Ale</b></h1>
      <h3>{dateObject.wkndList[1]}</h3>

      <div className='stages'> 
        <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
        <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
        <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
        <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
        <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
        <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
        <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
        <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
        <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
      </div>
        <JoustSchedule />
        </div>
    </>
  )
}
function ThrdWknd() {

  return (
    <>
    <div className='weekends'>
      <h1><b>Shamrocks, Shenanigans &#38; Sweet Romance</b></h1>
      <h3>{dateObject.wkndList[0]}</h3>

      <div className='stages'> 
        <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
        <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
        <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
        <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
        <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
        <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
        <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
        <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
        <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
      </div>
        <JoustSchedule />
        </div>
    </>
  )
}
function FrthWknd() {

  return (
    <>
    <div className='weekends'>
      <h1><b>Viking Invasion and Cosplay in the Kingdom</b></h1>
      <h3>{dateObject.wkndList[3]}</h3>

      <div className='stages'> 
        <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
        <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
        <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
        <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
        <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
        <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
        <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
        <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
        <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
      </div>
        <JoustSchedule />
      </div>
    </>
  )
}
function FfthWknd() {

  return (
    <>
    <div className='weekends'>
      <h1><b>Oktoberfest and Other Wonders of the World</b></h1>
      <h3>{dateObject.wkndList[4]}</h3>

      <div className='stages'> 
        <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
        <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
        <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
        <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
        <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
        <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
        <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
        <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
        <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
      </div>
        <JoustSchedule />
        </div>
    </>
  )
}
function ShopDay() {
  return (
    <>
      <div className='wknds'>
        <h1><b>Festive Shopping Day</b></h1>
        <h3>{dateObject.shopDay}</h3>

        <div className='stages'> 
          <ScheduleTable schedule={pavilion.schedule} class_name={pavilion.class_name} title={pavilion.title} />
          <ScheduleTable schedule={stLouis.schedule} class_name={stLouis.class_name} title={stLouis.title} />
          <ScheduleTable schedule={owain.schedule} class_name={owain.class_name} title={owain.title} />
          <ScheduleTable schedule={friendship.schedule} class_name={friendship.class_name} title={friendship.title} />
          <ScheduleTable schedule={joanOfArc.schedule} class_name={joanOfArc.class_name} title={joanOfArc.title} />
          <ScheduleTable schedule={marcoPolo.schedule} class_name={marcoPolo.class_name} title={marcoPolo.title} />
          <ScheduleTable schedule={storytelling.schedule} class_name={storytelling.class_name} title={storytelling.title} />
          <ScheduleTable schedule={knights.schedule} class_name={knights.class_name} title={knights.title} />
          <ScheduleTable schedule={pirates.schedule} class_name={pirates.class_name} title={pirates.title} />
        </div>
      <JoustSchedule />
      </div>
    </>
  )
}

function JoustSchedule() {
  return (
    <>
    <div className='joust tablediv'>
      <MDBTable striped hover >
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
