import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../social-media/SocialMedia";

function QuickLinksSetOne(props) {
    const pageId = props.id;

    let linkObject = [
        {
            url: '/about-us',
            text: 'About Us'
        },
        {
            url: '/tickets',
            text: 'Get Tickets'
        },
        {
            url: '/key-policies',
            text: 'Key Policies'
        },
        {
            url: '/events-contests-promotions',
            text: 'Daily Events, Contests & Promotions'
        },
        {
            url: '/bring-your-dog',
            text: 'Bring Your Dog'
        },
        {
            url: '/find-hotels',
            text: 'Find a Hotel'
        },
        {
            url: '/directions',
            text: 'Directions'
        },
        {
            url: '/faq',
            text: 'FAQ'
        },
        
    ]

    linkObject.splice((pageId-1), 1);

    return (
        <>
        <div className="col2">
          <h3 className="col2-header">Plan Your Visit</h3>
            {linkObject.map((item) => {
                return (
                    <>
                    <Link className='col2-link' to={item.url}>
                        {item.text}
                    </Link>
                    <br/>
                    </>
                )
            })}  
            <SocialMedia />
          </div>
        </>
    )
}

export default QuickLinksSetOne