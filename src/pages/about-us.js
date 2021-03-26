import { Link } from 'react-router-dom'
import SocialMedia from '../components/social-media/SocialMedia'
import dateObject from '../UPTODATE'


function AboutUs() {
  return <>
    <h1 className='page-header'>About Us</h1>
    <div className='margin-width two-col'>
      <div>
        <h2 >Welcome to the {dateObject.year} St Louis Renaissance Festival! </h2>
        
        <p>Mid-America Festivals is the nation’s largest producer of outdoor themed events. In 2019, we entertained nearly one million people in a wide variety of locations across the country. <br /><br />

        Mid-America Festivals currently devotes its time towards developing some of the best festivals in the country. Mid-America Festivals, along with affiliated entities, owns and operates the Minnesota Renaissance Festival,
         the Trail of Terror (located in Minnesota), the Bay Area Renaissance Festival at MOSI (located on the grounds of the Museum of Science and Industry in Tampa Bay, Florida), the Kansas City Renaissance Festival,
          the Michigan Renaissance Festival, the St. Louis Renaissance Festival and many other events. The company demonstrates its event production and promotion leadership by embracing all aspects of event production from
           specialty merchandise and corporate sponsorship to ticket sales and multi-media marketing.<br /><br />

        Based in Wentzville, Mid-America’s staff is comprised of talented managers’ experiences in all aspects of entertainment. Mid-America Festivals began producing Renaissance Festivals in 1976 as a natural extension of its
         president’s career in major venue promotion and production. The company’s background ranges from rock and roll events like the Beach Boys, Rolling Stones, and Prince to event management for concerts like Rock the Garden in Minneapolis.<br /><br />

      For more information about Mid-America Festivals <a href="http://www.mafestivals.com/">visit our Website</a>!</p>
      </div>
      <div className='col2'>
        <h3 className="col2-header">Plan Your Visit</h3>
        <ul>
          <li><Link className="col2-link" to="/tickets">Get Ticekts</Link></li>
        </ul>
        <SocialMedia />
      </div>
    </div>
  </>;
}

export default AboutUs;
