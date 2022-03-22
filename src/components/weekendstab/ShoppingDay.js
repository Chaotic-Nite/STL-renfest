import React, { useEffect, useState} from 'react';
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';

//Shopping Day
function ShopDay(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
    const normandyContests = [
      {name: `Beard Contest`, time: '12:00'},
      {name: `Stein Holding`, time: '12:15'},
      {name: `German Dance`, time: '12:45'},
      {name: `Costume Contest`, time: '1:45'},
      {name: `Belly Dance Contest`, time: '2:14'},
      {name: `Sauerkraut Eating Competition`, time: '2:45'},
      {name: `Giant Beer Pong`, time: '3:15'},
      {name: `Pretzel Necklace Contest`, time: '3:45'},
      {name: `Cornhole`, time: '4:00'},
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
        <p>Festive shopping day at a discounted price of $15, your ticket will grant you admission to the festival,
           a drink &#38; a swag bag full of great discounts from Festival Artisans!
           Purchase your ticket before {props.wkDate} and receive a gift bag full of additional goodies when you arrive!
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

export default ShopDay;