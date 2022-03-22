import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';




// Fifth Weekend
function FfthWknd(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
  
    const normandyContests = [
      {name: `Beard Contest`, time: '10:30'},
      {name: `Stein Holding`, time: '10:45'},
      {name: `Cornhole Tournament`, time: '11:00'},
      {name: `Costume Contest`, time: '2:45'},
      {name: `Belly Dance Contest`, time: '3:00'},
      {name: `German Dance Contest`, time: '3:15'},
      {name: `Giant Beer Pong`, time: '3:30'},
    ]
    
    const joustContests = [
      {name: `Wife Carry`, time: '12:15'},
      {name: `Tug-O-War Competition`, time: '12:45'},
      {name: `Keg Toss`, time: '1:15'},
      {name: `Pumpkin Bowling`, time: '3:15'},
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

  export default FfthWknd;