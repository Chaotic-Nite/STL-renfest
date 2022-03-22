import React, { useEffect, useState} from 'react';
import ScheduleTable from '../scheduletable/ScheduleTable';
import JoustSchedule from './JoustSchedule';
import { Link } from "react-router-dom";
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';

import dogForm from '../../pdf-files/Dog-Registration-Form.pdf'

  function ScndWknd(props) {
    const stageSchedules = props.schedules
    const [state, setState] = useState(true)
  
    const normandyContests = [
      {name: `Hold the Plank`, time: '10:35'},
      {name: `Prettiest Pup Smile Contest`, time: '12:20'},
      {name: `Smallest Dogs Competition`, time: '12:35'},
      {name: `Adult/Kid Pirate Costume Contest`, time: '12:50'},
      {name: `Dog Costume Contest`, time: '1:10'},
      {name: `Sit Means Sit Contest`, time: '1:20'},
      {name: `Peanut Butter Licking Contest`, time: '1:50'},
      {name: `Tattoo Competition`, time: '2:20'},
      {name: `Dog & Owner Look-Alike Contest`, time: '2:50'},
      {name: `Muscle Flex Competition`, time: '3:20'},
      {name: `Hot Dog Eating Contest`, time: '3:40'},
    ]
  
    const joustContests = [
      {name: `Weiner Race`, time: '12:15'},
      {name: `Corgi Race`, time: '12:45'},
      {name: `Obstacle Course`, time: '1:15'},
      {name: `Flash Fetch`, time: '2:45'},
      {name: `Hooman Obstacle Course`, time: '3:15'},
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
        <p>
          Bring your dog and pirate pals for our {props.weekend.name} weekend! This weekend will showcase 
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
        <MDBTable striped hover className='contest' >
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

  export default ScndWknd;