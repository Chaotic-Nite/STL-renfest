import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import ScheduleTable from "../components/scheduletable/ScheduleTable";
import { Link } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle, 
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'
import { dateObject } from "../lists/UPTODATE";
import { pavilionSch, stlouisSch, owainSch, friendshipSch, joanOfArcSch, marcoPoloSch, storytellingSch, knightsSch, piratesSch } from '../lists/themed-schedules'
import dogForm from '../pdf-files/Dog-Registration-Form.pdf'


function Weekends() {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  let initialState = 'highland-fling';
  if (location.hash.length > 0) {
    initialState = location.hash.substring(1);
  }
  console.log(pavilionSch["highland-fling"])
  const [pavilion, setPav] = useState({class_name: 'rp-stage', title: 'Royal Pavilion', schedule: pavilionSch[initialState]})
  const [stLouis, setLouis] = useState({class_name: 'stl-stage', title: 'St Louis Stage', schedule: stlouisSch[initialState]})
  const [owain, setOwain] = useState({class_name: 'o-stage', title: 'Owain Stage', schedule: owainSch[initialState]})
  const [friendship, setFriend] = useState({class_name: 'f-stage', title: 'Friendship Stage', schedule: friendshipSch[initialState]})
  const [joanOfArc, setJoan] = useState({class_name: 'joa-stage', title: 'Joan of Arc', schedule: joanOfArcSch[initialState]})
  const [marcoPolo, setMarco] = useState({class_name: 'mp-stage', title: 'Marco Polo Stage', schedule: marcoPoloSch[initialState]})
  const [storytelling, setStory] = useState({class_name: 'st-stage', title: 'Storytelling Stage', schedule: storytellingSch[initialState]})
  const [knights, setKnights] = useState({class_name: 'kp-stage', title: 'Knights Pub Stage', schedule: knightsSch[initialState]})
  const [pirates, setPirates] = useState({class_name: 'p-stage', title: 'Pirate Ship', schedule: piratesSch[initialState]})
  //const {pirates, setPirates} = useState({class_name: 'p-stage', title: 'Pirate Ship', schedule: piratesSch[initialState]})
  const [wknd, setWknd] = useState(initialState)
  const handleTabClick = (value) => {
    if (value === wknd) {
      return;
    }
    setWknd(value);
    setPav(state => ({...state, schedule: pavilionSch[value]}))
    setLouis(state => ({...state, schedule: stlouisSch[value]}))
    setOwain(state => ({...state, schedule: owainSch[value]}))
    setFriend(state => ({...state, schedule: friendshipSch[value]}))
    setJoan(state => ({...state, schedule: joanOfArcSch[value]}))
    setMarco(state => ({...state, schedule: marcoPoloSch[value]}))
    setStory(state => ({...state, schedule: storytellingSch[value]}))
    setKnights(state => ({...state, schedule: knightsSch[value]}))
    setPirates(state => ({...state, schedule: piratesSch[value]}))
  };
  const tabObject = [
    {id:'highland-fling', title:'Highland Fling'},
    {id:'pets-pirate-ale', title:'Pets & Pirates'},
    {id:'shamrocks-shenanigans', title:'Shamrocks & Shenanigans'},
    {id:'viking-invasion', title:'Viking & Cosplay'},
    {id:'oktoberfest', title:'Oktoberfest'},
    {id:'festive-shopping-day', title:'Festive Shopping Day'},
  ]
  useEffect(() => {
    if (wknd !== location.hash.substring(1) && location.hash.includes('#')){
      const value = location.hash.substring(1)
      setWknd(value)
      setPav(state => ({...state, schedule: pavilionSch[value]}))
      setLouis(state => ({...state, schedule: stlouisSch[value]}))
      setOwain(state => ({...state, schedule: owainSch[value]}))
      setFriend(state => ({...state, schedule: friendshipSch[value]}))
      setJoan(state => ({...state, schedule: joanOfArcSch[value]}))
      setMarco(state => ({...state, schedule: marcoPoloSch[value]}))
      setStory(state => ({...state, schedule: storytellingSch[value]}))
      setKnights(state => ({...state, schedule: knightsSch[value]}))
      setPirates(state => ({...state, schedule: piratesSch[value]}))
    } else if (!location.hash.includes('#')) {
      const value = 'highland-fling'
      setWknd(value)
      setPav(state => ({...state, schedule: pavilionSch[value]}))
      setLouis(state => ({...state, schedule: stlouisSch[value]}))
      setOwain(state => ({...state, schedule: owainSch[value]}))
      setFriend(state => ({...state, schedule: friendshipSch[value]}))
      setJoan(state => ({...state, schedule: joanOfArcSch[value]}))
      setMarco(state => ({...state, schedule: marcoPoloSch[value]}))
      setStory(state => ({...state, schedule: storytellingSch[value]}))
      setKnights(state => ({...state, schedule: knightsSch[value]}))
      setPirates(state => ({...state, schedule: piratesSch[value]}))
    }

    // eslint-disable-next-line
  }, [location]);

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
      <h1 className="page-header">Themed Weekends</h1>
      <div className="margin-width two-col weekends-col2">
        <div className='col1'>

          <MDBTabsContent>
            <MDBTabsPane show={wknd === 'highland-fling'}>
              <FrstWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
              /></MDBTabsPane>
            <MDBTabsPane show={wknd === 'pets-pirate-ale'}>
              <ScndWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === 'shamrocks-shenanigans'}>
              <ThrdWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === 'viking-invasion'}>
              <FrthWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === 'oktoberfest'}>
              <FfthWknd 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                /></MDBTabsPane>
            <MDBTabsPane show={wknd === 'festive-shopping-day'}>
              <ShopDay 
                schedules={[pavilion, stLouis, owain, friendship, joanOfArc, marcoPolo, storytelling, knights, pirates]}
                /></MDBTabsPane>
          </MDBTabsContent>
        </div>
        <div className='col2 weekends-colend'>
          <h3 className="col2-header"><b>Themed Weekends</b></h3>
          <div id='weekend'>
            {isMobile ?
              <>
              <MDBDropdown>
                <MDBDropdownToggle>{wknd}</MDBDropdownToggle>
                <MDBDropdownMenu>
                  {tabObject.map((item) => {
                    if (item.id === wknd){
                      return null
                    }
                    else {

                      return (
                        <MDBDropdownItem>
                        <MDBDropdownLink onClick={() => handleTabClick(item.id)} active={wknd === item.id}>
                          {item.title}
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                  )}})}
                  </MDBDropdownMenu>
                  </MDBDropdown>
                  </>
              :
              <>
              <MDBTabs pills justify className='mb-3'>
                {tabObject.map((item) => {
                  return (
                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick(item.id)} active={wknd === item.id}>
                        {item.title}
                      </MDBTabsLink>
                    </MDBTabsItem>
              )})}
              </MDBTabs>
              </>}
          </div>
        </div>
          
        </div>
    </>
  );
}

function FrstWknd(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)

  const normandyContests = [
    {name: 'Kids Kilt Competition', time: '12:00'},
    {name: 'Adult Kilt Competition', time: '12:15'},
    {name: 'Tater Tot Toss Competition', time: '12:45'},
    {name: 'Scotch Egg Eating Competition', time: '1:45'},
    {name: 'Bonnie Knees Contest', time: '2:15'},
    {name: 'Dance Competition', time: '2:45'},
    {name: 'Beard Competition', time: '3:15'},
    {name: 'Hula Hoop Competition', time: '3:45'},
    {name: 'Cornhole Tournament', time: '4:00'},
  ]
  
  const joustContests = [
    {name: 'Kids Highland Games', time: '11:00'},
    {name: 'Keg Toss', time: '12:15'},
    {name: 'Highland Games Part I', time: '12:45'},
    {name: 'Wife Carry', time: '1:15'},
    {name: 'Highland Games Part II', time: '2:45'},
    {name: 'Tug of War Competition', time: '3:15'},
  ]


  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }

  return (
    <>
      <div className="weekends" >
      <div className='wknds'>
      <h1><b>Highland Fling</b></h1>
      <h3>{dateObject.wkndList[0]}</h3>
        <span>The Highland Fling weekend will have you cheering for your favorite athlete in our Celtic Games. 
          Come join on the fun as you experience our Scottish weekend, full of contests, vendors, and the annual Highland Games. Be sure to check out our <Link to='events-contests-promotions'>Daily Royal Events</Link>, there's something fun for everyone.</span>
      
      {state ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
        <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
      </div>
      </div>
    </>
  )
}
function ScndWknd(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)

  const normandyContests = [
    {name: 'Hold the Plank', time: '10:35'},
    {name: 'Kids Pirate Costume Contest', time: '12:20'},
    {name: 'Smallest Dogs Competition', time: '12:35'},
    {name: 'Adult Pirate Costume Contest', time: '12:50'},
    {name: 'Dog Costume Contest', time: '1:10'},
    {name: 'Sit Means Sit Contest', time: '1:20'},
    {name: 'Peanut Butter Licking Contest', time: '1:50'},
    {name: 'Tattoo Competition', time: '2:20'},
    {name: 'Dog & Owner Look Alike Contest', time: '2:50'},
    {name: 'Muscle Flex Competition', time: '3:20'},
    {name: 'Hot Dog Eating Contest', time: '3:40'},
  ]

  const joustContests = [
    {name:'', time: ''}
  ]

  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }

 return (
    <>
      <div className="weekends" >
      <div className='wknds'>
      <h1><b>Pets, Pirates &#38; Ale</b></h1>
      <h3>{dateObject.wkndList[1]}</h3>
      <p>
        Bring your dog and pirate pals for our Pets, Pirates &#38; Ale weekend! This weekend will showcase 
        contests for your pets to compete in, like Wiener Dog Races, Corgi Races, Peanut Butter Licking contest, and more! 
        Not only are there activites for your pets, but also for you! 
        Toast your mates and enjoy the finest mead and beer in the realm. 
        <br />Please note, <u>only dogs are allowed</u>. <br />
        You must complete the <a href={dogForm} target='_blank' rel='noreferrer'>Dog Registration Form</a> &#38; check in at the pet gate.
      </p>
      <span>You can find out more information on bring your four legged friend <Link to='bring-your-dog'>here</Link>.</span>

      <p style={{fontVariant: 'small-caps', color: 'red'}}><b>Dogs Only!</b></p>

      {state ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
            <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
      </div>

      </div>
    </>
  )
}
function ThrdWknd(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)
  
  const normandyContests = [
    {name: 'Longest Kiss Competition', time: '11:30'},
    {name: ' Chocolate Pie Eating Contest', time: '12:00'},
    {name: 'Newlywed Game', time: '1:15'},
    {name: 'Irish Dance', time: '2:45'},
    {name: 'Shamrock Scramble', time: '3:00'},
    {name: 'Leprechaun Costume', time: '3:15'},
    {name: 'Beard Competition', time: '3:30'},
  ]
  
  const joustContests = [
    {name: 'Wildlife Command Bird of Prey Show', time: '10:30'},
    {name: '3 Leg Race', time: '12:15'},
    {name: 'Sack Race', time: '12:30'},
    {name: 'Tug of War', time: '12:45'},
    {name: 'Wife Carry', time: '1:00'},
    {name: 'Keg Toss', time: '1:15'},
  ]



  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }

  return (
    <>
    <div className="weekends" >
      <div className='wknds'>
      <h1><b>Shamrocks, Shenanigans &#38; Sweet Romance</b></h1>
      <h3>{dateObject.wkndList[0]}</h3> 

      <p>Transport to Ireland by visiting us this weekend! You will find local Irish vendors and fun for all ages. 
        Kick up your heels with traditional Irish music and dance and experience our Irish themed eating contests! 
        Enjoy some chocolate themed contests and some free chocolate!</p>
      <p>Take place in our Marriage En Masse and Vow Renewal.</p>
      <p><i>Will update on page once link for form is live for pre-registration</i></p>

      <span>Be sure to check out our <Link to='events-contests-promotions'>Daily Royal Events</Link> too!</span>
      <br />
      <h3><b>Marriage En Masse</b></h3>
      <p>Want to get married this weekend? We have a mass wedding ceremony that you and your significant other can join!
         Tickets are $50, which includes festival admission for two and a small reception after with beverages and cake!
         Marriage En Masse will take place both {dateObject.wkndList[2]} {dateObject.year} at 2:30 to 3:00pm at the white Chapel. Reception to follow on at the Queen's Garden by the Royal Court. 
         </p>
         <p><i>Will update on page once link for form is live for pre-registration</i></p>
      <br />
      <h3><b>Vow Renewals</b></h3>
      <p>Renew your vows for $50 at the festival! Vow Renewals will take place at the festival, following Marriage en Masse.
         Tickets include admission to the festival for two and a small reception after with beverages and cake!
         Vow Renewal will take place both {dateObject.wkndList[2]} {dateObject.year} at 3:00 to 3:30pm at the white Chapel. Reception to follow on at the Queen's Garden by the Royal Court.</p>
      <p><i>Will update on page once link for form is live for pre-registration</i></p>
      
      {state ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
            <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
        </div>
      </div>
    </>
  )
}
function FrthWknd(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)

  const normandyContests = [
    {name: 'Belly Dancing Competition', time: '1:00'},
    {name: 'Fantasy Mask Competition', time: '2:00'},
    {name: 'Star Wars Costume Contest', time: '2:10'},
    {name: 'Game of Throne Costume Contest', time: '2:20'},
    {name: 'Steampunk Costume Contest', time: '2:30'},
    {name: 'Sci-Fi Costume Contest', time: '2:40'},
  ]
  
  const joustContests = [
    {name: 'Light Saber Duel', time: '3:00'},
    {name: 'Wife Carry', time: '3:30'},
  ]



  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }
  return (
    <>
      <div className="weekends" >
      <div className='wknds'>
      <h1><b>Viking Invasion and Cosplay in the Kingdom</b></h1>
      <h3>{dateObject.wkndList[3]}</h3>
      <p>Dress up as your favorite Wizard, Witch, Game of Thrones Character, Doctor Who Character, Video Game Character, or any other costume you'd like!
        Participate in our Costume Contests, happening throughout the day and try your hand in our duel of fates Light Saber Contest!
      </p>
      <span>Be sure to check out our <Link to='events-contests-promotions'>Daily Royal Events</Link> too!</span>


      {state ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
            <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
        </div>
      </div>
    </>
  )
}
function FfthWknd(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)


  const normandyContests = [
    {name: 'Beard Contest', time: '10:30'},
    {name: 'Stein Holding ', time: '10:45'},
    {name: 'Cornhole Tournament', time: '11:00'},
    {name: 'Costume Contest', time: '2:45'},
    {name: 'Belly Dance Contest *Prizes by Aalim & Chuvani Belly Dance', time: '3:00'},
    {name: 'German Dance Contest', time: '3:15'},
    {name: 'Giant Beer Pong', time: '3:30'},
  ]
  
  const joustContests = [
    {name: 'Keg Toss', time: '12:45'},
    {name: 'Tug of War', time: '1:00'},
  ]



  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }
  

  return (
    <>
      <div className="weekends" >
      <div className='wknds'>
      <h1><b>Oktoberfest and Other Wonders of the World</b></h1>
      <h3>{dateObject.wkndList[4]}</h3>
      <p>Join us for one of our most popular themed weekends: <b>Oktoberfest</b>!
      Participate in our Belching contest, Beer Pong contest, Cornhole tournament, Rootbeer Chugging contest, 
      Keg Toss and more! </p>
      <span>Be sure to check out our <Link to='events-contests-promotions'>Daily Royal Events</Link> too!</span>


      {state ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
            <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
      </div>
      </div>
    </>
  )
}
function ShopDay(props) {
  const stageSchedules = props.schedules
  const [state, setState] = useState(true)
  const normandyContests = [
    {name: 'Kids Costume Contest', time: '12:00'},
    {name: 'Adult Costume Contest', time: '12:15'},
    {name: 'Guess the Food', time: '1:30'},
    {name: 'Country Trivia', time: '1:45'},
    {name: 'Cornhole Tournament', time: '2:45'},
    {name: 'Beard Competition', time: '3:15'},
    {name: 'Dog Costume Contest', time: '3:30'},
  ]
  
  const joustContests = [
    {name: '', time: ''},
  ]

  if (normandyContests[0].name === '' && joustContests[0].name === '') {
    setState(false)
  }

  return (
    <>
      <div className="weekends" >
      <div className='wknds'>
        <h1><b>Festive Shopping Day</b></h1>
        <h3>{dateObject.shopDay}</h3>
      <p>Festive shopping day at a discounted price of $15, your ticket will grant you admission to the festival,
         a drink &#38; a swag bag full of great discounts from Festival Artisans!
         Purchase your ticket before {dateObject.shopDay} and receive a gift bag full of additional goodies when you arrive!
      </p>
      <p><i>(Over $50 Value!)</i></p>

      <p><b>Festive Shopping Day Ticket with Festival Admission is $15</b></p>
      <p><i>Will update on page once link for ticket is live</i></p>

      {state  ?
      <>
      <br />
      <h3>Contests</h3>
      <div className='contests'>
      {normandyContests[0].name !== ''?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Normandy Stage</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {normandyContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable>:null}
      {joustContests[0].time !== '' ?
      <MDBTable striped hover className='contest'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {joustContests.map((item) => {
          return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
              )
            })}
        </MDBTableBody>
      </MDBTable> : null}
      </div>
      </>
      :null}
      </div>
      <br />
            <h3 className="col2-header">Stage Schedules</h3>
        <div className='stages'> 
        <JoustSchedule />
        {stageSchedules.map((item) => {
          return (
          <ScheduleTable schedule={item.schedule} class_name={item.class_name} title={item.title} />
        )})}
      </div>
      </div>
    </>
  )
}

function JoustSchedule() {
  return (
    <>
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
    </>
  )
}


export default Weekends;
