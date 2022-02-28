import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle, 
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'
import { dateObject } from "../lists/UPTODATE";
import { STAGESCHEDULE, weekends, listWeekends } from '../lists/themed-schedules'
import SocialMedia from "../components/social-media/SocialMedia.js";
import SmallWarningSign from "../components/homepage-content/warning/SmallWarning.js";

import FrstWknd from "../components/weekendstab/FirstWeekend";
import ScndWknd from "../components/weekendstab/SecondWeekend";
import ThrdWknd from "../components/weekendstab/ThirdWeekend";
import FrthWknd from "../components/weekendstab/FourthWeekend";
import FfthWknd from "../components/weekendstab/FifthWeekend";
import SxthWknd from "../components/weekendstab/SixthWeekend";
import ShopDay from "../components/weekendstab/ShoppingDay";

const pavSch = STAGESCHEDULE.pavilion 
const stlSch = STAGESCHEDULE.pavilion
const owaSch = STAGESCHEDULE.pavilion
const friSch = STAGESCHEDULE.pavilion
const joaSch = STAGESCHEDULE.pavilion
const mpSch = STAGESCHEDULE.pavilion
const stoSch = STAGESCHEDULE.pavilion
const kniSch = STAGESCHEDULE.pavilion
const pirSch = STAGESCHEDULE.pavilion


function Weekends() {
  const [width, setWidth] = useState(window.innerWidth);
  // Set to track the location of the weekends to appropriately load
  const location = useLocation();
  let initialState =  weekends.weekendOne.id;
  if (location.hash.length > 0) {
    initialState = location.hash.substring(1);
  }

  // List of Stages on Site
  const [pavilion, setPav] = useState({class_name: 'rp-stage', title: 'Royal Pavilion', schedule: pavSch[initialState]})
  const [stLouis, setLouis] = useState({class_name: 'stl-stage', title: 'St Louis Stage', schedule: stlSch[initialState]})
  const [owain, setOwain] = useState({class_name: 'o-stage', title: 'Owain Stage', schedule: owaSch[initialState]})
  const [friendship, setFriend] = useState({class_name: 'f-stage', title: 'Friendship Stage', schedule: friSch[initialState]})
  const [joanOfArc, setJoan] = useState({class_name: 'joa-stage', title: 'Joan of Arc', schedule: joaSch[initialState]})
  const [marcoPolo, setMarco] = useState({class_name: 'mp-stage', title: 'Marco Polo Stage', schedule: mpSch[initialState]})
  const [storytelling, setStory] = useState({class_name: 'st-stage', title: 'Storytelling Stage', schedule: stoSch[initialState]})
  const [knights, setKnights] = useState({class_name: 'kp-stage', title: 'Knights Pub Stage', schedule: kniSch[initialState]})
  const [pirates, setPirates] = useState({class_name: 'p-stage', title: 'Pirate Ship', schedule: pirSch[initialState]})
  
  const [wknd, setWknd] = useState(initialState)

  const handleTabClick = (value) => {
    /**
     * Reloads stage states on the tabs, will allow the transition to update
     * without reloading the page
     */
    if (value === wknd) {
      return;
    }
    setWknd(value);
    setPav(state => ({...state, schedule: pavSch[value]}))
    setLouis(state => ({...state, schedule: stlSch[value]}))
    setOwain(state => ({...state, schedule: owaSch[value]}))
    setFriend(state => ({...state, schedule: friSch[value]}))
    setJoan(state => ({...state, schedule: joaSch[value]}))
    setMarco(state => ({...state, schedule: mpSch[value]}))
    setStory(state => ({...state, schedule: stoSch[value]}))
    setKnights(state => ({...state, schedule: kniSch[value]}))
    setPirates(state => ({...state, schedule: pirSch[value]}))
  };

  const filterName = (value) => {
    /**
     * Checks the weekend name to allow the ability to load instead of erroring
     */
    if (wknd === value.id) {
      return value.title
    }
  }

  useEffect(() => {
    /**
     * Upon loading the weekend page, it checks if the value has a valid weekend Id
     * If it does then it'll jump to that weekend, if not it will load the first weekend
     */
    if (wknd !== location.hash.substring(1) && location.hash.includes('#')){
      const value = location.hash.substring(1)
      setWknd(value)
      setPav(state => ({...state, schedule: pavSch[value]}))
      setLouis(state => ({...state, schedule: stlSch[value]}))
      setOwain(state => ({...state, schedule: owaSch[value]}))
      setFriend(state => ({...state, schedule: friSch[value]}))
      setJoan(state => ({...state, schedule: joaSch[value]}))
      setMarco(state => ({...state, schedule: mpSch[value]}))
      setStory(state => ({...state, schedule: stoSch[value]}))
      setKnights(state => ({...state, schedule: kniSch[value]}))
      setPirates(state => ({...state, schedule: pirSch[value]}))
    } else if (!location.hash.includes('#')) {
      const value =  weekends.weekendOne.id
      setWknd(value)
      setPav(state => ({...state, schedule: pavSch[value]}))
      setLouis(state => ({...state, schedule: stlSch[value]}))
      setOwain(state => ({...state, schedule: owaSch[value]}))
      setFriend(state => ({...state, schedule: friSch[value]}))
      setJoan(state => ({...state, schedule: joaSch[value]}))
      setMarco(state => ({...state, schedule: mpSch[value]}))
      setStory(state => ({...state, schedule: stoSch[value]}))
      setKnights(state => ({...state, schedule: kniSch[value]}))
      setPirates(state => ({...state, schedule: pirSch[value]}))
    }

    // eslint-disable-next-line
  }, [location]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    /**
     * Checks the size of the browser and will adjust accordingly for best experience.
     */
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024 ? true : false;

  return (
    <>
      <Navigation />
      <h1 className="page-header">Themed Weekends</h1>
      <div className="margin-width two-col weekends-col2">
        <div className='col1'>
          <MDBTabsContent>
            <MDBTabsPane show={wknd ===  weekends.weekendOne.id}>
              <FrstWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendOne}
                wkDate={dateObject.wkndList[0]}
              /></MDBTabsPane>
            <MDBTabsPane show={wknd === weekends.weekendTwo.id}>
              <ScndWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendTwo}
                wkDate={dateObject.wkndList[1]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === weekends.weekendThree.id}>
              <ThrdWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendThree}
                wkDate={dateObject.wkndList[2]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === weekends.weekendFour.id}>
              <FrthWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendFour}
                wkDate={dateObject.wkndList[3]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === weekends.weekendFive.id}>
              <FfthWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendFive}
                wkDate={dateObject.wkndList[4]}
                /></MDBTabsPane>

            <MDBTabsPane show={wknd === weekends.weekendSix.id}>
              <SxthWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.weekendSix}
                wkDate={dateObject.wkndList[5]}
              />
            </MDBTabsPane>
            <MDBTabsPane show={wknd === weekends.shoppingDay.id}>
              <ShopDay 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                weekend={weekends.shoppingDay}
                wkDate={dateObject.shopDay}
                /></MDBTabsPane>
          </MDBTabsContent>
        </div>
        <div className='col2 weekends-colend'>
            {isMobile ?
              <>
          <div id='weekend'>
              <MDBDropdown>
                <MDBDropdownToggle>{listWeekends.map(filterName)}</MDBDropdownToggle>
                <MDBDropdownMenu>
                  {listWeekends.map((item) => {
                    if (item.id === wknd){
                      return null
                    }
                    else {

                      return (
                        <MDBDropdownItem key={item.id}>
                        <MDBDropdownLink onClick={() => handleTabClick(item.id)} active={wknd === item.id}>
                          {item.short}
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                  )}})}
                  </MDBDropdownMenu>
                  </MDBDropdown>
                  <SmallWarningSign />

                </div>
                  </>
              :
              <>
              
          <h3 className="col2-header"><b>Themed Weekends</b></h3>
          <div id='weekend'>
              <MDBTabs pills justify className='mb-3'>
                {listWeekends.map((item) => {
                  return (
                    <MDBTabsItem key={item.id}>
                      <MDBTabsLink onClick={() => handleTabClick(item.id)} active={wknd === item.id}>
                        {item.short}
                      </MDBTabsLink>
                    </MDBTabsItem>
              )})}
              </MDBTabs>
              <SocialMedia />
              </div>
              </>}
        </div>
          
        </div>
    </>
  );
}

export default Weekends;
