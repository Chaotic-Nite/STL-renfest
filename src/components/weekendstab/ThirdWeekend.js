import React, { useEffect, useState} from 'react';
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';


  function ThrdWknd(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
    
    const normandyContests = [
      {name: `Kids Kilt Contest`, time: '12:00'},
      {name: `Adult Kilt Contest`, time: '12:15'},
      {name: `Irish Dance`, time: '12:45'},
      {name: `Shamrock Scramble`, time: '1:45'},
      {name: `Leprechaun Contest`, time: '2:15'},
      {name: `Beard Competition`, time: '3:15'},
      {name: `Tater Toss`, time: '3:30'},
      {name: `Sack Race`, time: '4:00'},
    ]
    
    const joustContests = [
      {name: `Kids' Keltic Games`, time: '11:00'},
      {name: `Keg Toss`, time: '12:15'},
      {name: `Keltic Games Part I`, time: '12:45'},
      {name: `Wife Carry`, time: '1:15'},
      {name: `Keltic Games Part II`, time: '2:45'},
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
  
        <p>Transport to Ireland by visiting us this weekend! You will find local Irish vendors and fun for all ages. Kick up your heels with traditional Irish music and dance and experience our Irish themed eating contests!</p>
        
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

export default ThrdWknd;