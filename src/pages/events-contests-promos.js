import React, {useState} from 'react';
import Navigation from '../components/navigation/Navigation';
import SocialMedia from "../components/social-media/SocialMedia";
import { Link } from 'react-router-dom'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCard,
    MDBCardTitle,
    MDBListGroupItem,
    MDBCardText,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
import {contestsList, setPromotions, dailyEvents} from '../lists/contests.js'


function EventsContestsPromos() {
    const [justifyActive, setJustifyActive] = useState('events');

    const handleJustifyClick = (value) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };

    return (
        <>
            <Navigation />
            <h1 className='page-header'>Daily Events, Contests &#38; Promotions</h1>
            <div className='margin-width two-col'>
            <div>
                <MDBTabs pills justify className='mb-3'>
                    <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('events')} active={justifyActive === 'events'}>
                        Daily Events
                    </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                    <MDBTabsLink  onClick={() => handleJustifyClick('contests')} active={justifyActive === 'contests'}>
                        Contests
                    </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('promos')} active={justifyActive === 'promos'}>
                        Promotions
                    </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === 'events'}><Events /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'contests'}><Contests /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'promos'}><Promotions /></MDBTabsPane>
                </MDBTabsContent>
            </div>
            
            <div className="col2">
                <h3 className="col2-header">Plan Your Visit</h3>
                <ul>
                <li>
                    <Link className="col2-link" to="/about-us">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link className="col2-link" to="/key-policies">
                    Key Policies
                    </Link>
                </li>
                <li>
                    <Link className="col2-link" to="/tickets">
                    Get Tickets
                    </Link>
                </li>
                <li>
                    <Link className="col2-link" to="/bring-you-dog">
                    Bring Your Dog
                    </Link>
                </li>
                <li>
                    <Link className="col2-link" to="/find-hotels">
                    Find a hotel
                    </Link>
                </li>
                <li>
                    <Link className="col2-link" to="/directions">
                    Directions
                    </Link>
                </li>
                </ul>
                <SocialMedia />
            </div>
            </div>
        </>
    )
}

function Events() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Daily Events</h1>
                <MDBCard>
                        {dailyEvents.map((item) => {
                            return (
                        <MDBListGroupItem>
                            <MDBCard border='dark'>
                                <MDBCardTitle className='ecp-title'>
                                    {item.title}
                                </MDBCardTitle>
                                <MDBCardText className='ecp-subheader'>
                                    <i>{item.price}</i>
                                </MDBCardText>
                                <MDBCardText>
                                    {item.description}
                                </MDBCardText>
                                <MDBCardText className='italic-card'>
                                    {item.ageSuggetion? (<i>**{item.age}</i>): (<i></i>)}
                                </MDBCardText>
                                <MDBCardFooter border='dark'>
                                    {item.time.length === 2? (<p>{item.time[0]}<br/>{item.time[1]}</p>) : (item.time)}
                                </MDBCardFooter>
                            </MDBCard>

                        </MDBListGroupItem>
                        ) 
                    })}
                </MDBCard>
        </>
    )
}


function Promotions() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Promotions</h1>
                <MDBCard>
                        {setPromotions.map((item) => {
                            return (
                        <MDBListGroupItem>
                            <MDBCard border='dark'>
                                <MDBCardTitle className='ecp-title'>
                                    {item.title}
                                </MDBCardTitle>
                                <MDBCardText className='ecp-subheader'>
                                    <i>{item.dates}</i>
                                </MDBCardText>
                                <MDBCardText>
                                    {item.info}
                                </MDBCardText>
                                <MDBCardText className='italic-card'>
                                    <i>{item.italics? item.italics : null}</i>
                                </MDBCardText>
                            </MDBCard>

                        </MDBListGroupItem>
                        ) 
                    })}
                </MDBCard>
        </>
    )
}

function Contests() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Contests</h1>
                <MDBCard>
                        {contestsList.map((item) => {
                            return (
                        <MDBListGroupItem>
                            <MDBCard border='dark'>
                                <MDBCardTitle className='ecp-title'>
                                    {item.name}
                                </MDBCardTitle>
                                <MDBCardText>
                                    {item.description.map((item) => (<p>{item}</p>))}
                                </MDBCardText>
                                <MDBCardText className='italic-card'>
                                    <i>{item.italics? item.italics : null}</i>
                                </MDBCardText>
                                <MDBCardText>
                                    {item.downloadLink}
                                </MDBCardText>
                            </MDBCard>

                        </MDBListGroupItem>
                        ) 
                    })}
                </MDBCard>
        </>
    )
}

export default EventsContestsPromos