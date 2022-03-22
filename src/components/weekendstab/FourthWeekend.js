import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';



  function FrthWknd(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
  
    const normandyContests = [
      {name: `Games of Thrones Costume Contest`, time: '12:00'},
      {name: `Hulk Smash`, time: '12:15'},
      {name: `Star Wars Costume Contest`, time: '12:45'},
      {name: `Lightsaber Duel`, time: '1:45'},
      {name: `Hero Costume Contest`, time: '2:15'},
      {name: `Villain Costume Contest`, time: '2:45'},
      {name: `Fantasy Mask Competition`, time: '3:15'},
      {name: `Newlywed Game`, time: '3:30'},
      {name: `Pie Eating Contest`, time: '4:00'},
    ]
    const joustContests = [
      {name: `Kids Flash Race`, time: '12:15'},
      {name: `Keg Toss`, time: '12:45'},
      {name: `Wife Carry`, time: '1:15'},
      {name: `Heros V. Villains Tug-O-War Competition`, time: '2:45'},
      {name: `Adult Flash Race`, time: '3:15'},
    ]
  
    useEffect(() => {
      if (normandyContests[0].name === '' && joustContests[0].name === '') {
        setState(false)
      }
      // eslint-disable-next-line
    }, []);
  
    return (
      <>
        <div className="weekends" >
        <div className='wknds'>
        <h1><b>{props.weekend.name}</b></h1>
        <h3>{props.wkDate}</h3>
        <p>Dress up as your favorite Wizard, Witch, Game of Thrones Character, Doctor Who Character, Video Game Character, or any other costume you'd like! <br /> Choose a side: <b>Hero or Villain</b>?<br /> 
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
                  <tr key={item.name}>
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
                  <tr key={item.name}>
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
            <ScheduleTable key={item.name} schedule={item.schedule} class_name={item.class_name} title={item.title} />
          )})}
          </div>
        </div>
      </>
    )
  }

  export default FrthWknd;