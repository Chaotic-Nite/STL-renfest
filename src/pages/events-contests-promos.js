import React, {useState} from 'react';
import Navigation from '../components/navigation/Navigation';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
import {contestsList, setPromotions, dailyEvents} from '../lists/contests.js'
import QuickLinksSetOne from '../components/quicklinks/QuickLinksSetOne';


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
             <QuickLinksSetOne id={4} />
            </div>
            </div>
        </>
    )
}

function Events() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Daily Events</h1>
 
                {dailyEvents.map((item) => {
                    return (
                    <MDBCard border='dark'>
                        <MDBCardTitle className='ecp-title'>
                            {item.title}
                        </MDBCardTitle>
                        <MDBCardText className='ecp-subheader'>
                            <i>{item.price}</i>
                            {item.ticketUrl.length ? (
                                <>
                                <br/>
                                <span>Get your {item.title}  ticket <a rel="noreferrer" href={item.ticketUrl} target='_blank'>Here</a></span>
                                </>
                            ) : null}
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
                ) 
            })}
        </>
    )
}


function Promotions() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Promotions</h1>

                {setPromotions.map((item) => {
                    return (
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
                        <MDBCardFooter className='italic-card'>
                            <i>{item.italics? item.italics : null}</i>
                        </MDBCardFooter>
                    </MDBCard>

                ) 
            })}
        </>
    )
}

function Contests() {
    return (
        <>
            <h1 className='center-text' style={{fontVariant: 'small-caps'}}>Contests</h1>

                {contestsList.map((item) => {
                    return (
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
                        <MDBCardFooter>
                            <a href={item.downloadLink} download>Download Form Here</a>
                        </MDBCardFooter>
                    </MDBCard>

                ) 
            })}
        </>
    )
}

export default EventsContestsPromos