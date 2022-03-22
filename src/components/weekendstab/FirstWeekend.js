import React, { useEffect, useState} from 'react';
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import { Link } from "react-router-dom";
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';


function FrstWknd(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
  
    const normandyContests = [
      {name: `Kids Kilt Contest`, time: '12:00'},
      {name: `Adult Kilt Contest`, time: '12:15'},
      {name: `Tater Tot Toss`, time: '12:45'},
      {name: `Scotch Egg Eating`, time: '1:45'},
      {name: `Bonnie Knees`, time: '2:15'},
      {name: `Dance Contest`, time: '2:45'},
      {name: `Beard Contest`, time: '3:15'},
      {name: `Hula Hoop Contest`, time: '3:45'},
      {name: `Cornhole Tournament`, time: '4:00'},
    ]
    
    const joustContests = [
      {name: `Kids' Highland Games`, time: '11:00'},
      {name: `Keg Toss`, time: '12:15'},
      {name: `Highland Games Part I`, time: '12:45'},
      {name: `Wife Carry`, time: '1:15'},
      {name: `Highland Games Part II`, time: '2:45'},
      {name: `Tug-o-War Competition`, time: '3:15'},
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

  export default FrstWknd;