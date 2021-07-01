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
import { setPromotions, dailyEvents} from '../lists/contests.js'
import QuickLinksSetOne from '../components/quicklinks/QuickLinksSetOne';
import { dateObject } from '../lists/UPTODATE';

import fairy_house from '../pdf-files/Fairy-House-Form.pdf'
import mural from '../pdf-files/Mural-Registration-Form.pdf'
import banner from '../pdf-files/STL-BANNER-FORM.pdf'
import fantasy_mask from '../pdf-files/Fantasy-Mask-Registration-Form.pdf'

const deadline = 'September 4th'

const contestsList = [
    {
        name: 'Fairy House Competition',
        description: [`All patrons big and small are invited to make their own unique fairy house and share it during the Festival. 
        `, `FREE to participate and each fairy house submitted will receive 2 FREE admission tickets to the Festival. 
        The fairy houses will be judged and the top 3 winners in each category 
        (Adult & Child) will win great prizes! 
        `,`Those participating will take their Fairy House to the box office to receive the free tickets and then drop it off in Fairy Wing Forest.`,`
        Fairy houses are accepted our first three weekends 
        (September ${dateObject.wkndRaw[0].getDate()}, ${dateObject.wkndRaw[1].getDate()}, ${dateObject.wkndRaw[2].getDate()}, ${dateObject.wkndRaw[3].getDate()}, October ${dateObject.wkndRaw[4].getDate()}, and ${dateObject.wkndRaw[5].getDate()}).`],
        downloadLink: fairy_house,
    },
    {
        name: 'Mural Competition',
        description: [`Show off your artistic skills by painting and submitting a unique Mermaid themed mural for a chance to win a great prize! 
        `,`FREE to participate and each mural submitted will receive 4 FREE admission tickets to the festival. 
        Mural judging will begin September ${dateObject.wkndRaw[0].getDate()}th and top three murals will WIN great prizes!
        `,`Mural can be dropped off at our Festival site M-F 9am to 5pm.
        `, `Submission Date is Friday ${deadline}. Guidelines listed on Mural form.`],
        downloadLink: mural,
    },
    {
        name: 'Banner Competition',
        description: [`
        Show off your artistic skills by painting and submitting a unique Renaissance themed Banner for a chance to win a great prize! 
        `,`FREE to participate and each banner submitted will receive 2 FREE admission tickets to the festival. Banner judging will begin September ${dateObject.wkndRaw[0].getDate()}th and top three murals will WIN great prizes!
`,`Banners can be dropped off at our Festival site M-F 9am to 5pm.`,`Submission Date is Friday ${deadline}. Guidelines listed on Banner form.
        `],
        downloadLink: banner,
    },
    {
        name: 'Fantasy Mask',
        description: [
            `
            Show off your best mask, have fun with a character!`, `The contest is free to participate and all participants will receive FREE admission into the Festival with their Mask.
            `,
        ],
        italics: `(Fantasy Mask is only valid the “Viking Invasion and Cosplay in the Kingdom, ${dateObject.wkndList[3]}.” weekend of the Festival).`,
        downloadLink: fantasy_mask,
    },
]

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