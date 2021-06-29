import React, {useState, useEffect} from "react";
import Navigation from "../components/navigation/Navigation.js";
import { Link } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle, 
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'
import {vendTabs} from '../lists/themed-schedules'

function EntertainmentVendor() {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  let initialState =  'artisans';
  if (location.hash.length > 0) {
    initialState = location.hash.substring(1);
  }
  const [vend, setVend] = useState(initialState)
  const [vendName, setVendName] = useState('Artisan Marketplace')

  const handleTabClick = (value, name) => {
    if (value === vend) {
      return;
    }
    setVend(value);
    setVendName(name)
  };

  useEffect(() => {
    if (vend !== location.hash.substring(1) && location.hash.includes('#')){
      const value = location.hash.substring(1)
      setVend(value)
    } else if (!location.hash.includes('#')) {
      const value =  vendTabs[0].id
      setVend(value)
    }

    // eslint-disable-next-line
  }, [location]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024 ? true : false;


  return (
    <>
      <Navigation />
      <h1 className="page-header">Entertainers &#38; Vendors</h1>
      <div className="margin-width two-col weekends-col2">
        <div className='col1'>

          <MDBTabsContent>
            <MDBTabsPane show={vend ===  vendTabs[0].id}><Artisan /></MDBTabsPane>
            <MDBTabsPane show={vend === vendTabs[1].id}><Food /></MDBTabsPane>
            <MDBTabsPane show={vend === vendTabs[2].id}><Games /></MDBTabsPane>
            <MDBTabsPane show={vend === vendTabs[3].id}><Musical /></MDBTabsPane>
            <MDBTabsPane show={vend === vendTabs[4].id}><Specialty /></MDBTabsPane>
            <MDBTabsPane show={vend === vendTabs[5].id}><Streets /></MDBTabsPane>
          </MDBTabsContent>
        </div>
        <div className='col2 weekends-colend'>
            {isMobile ?
              <>
          <div id='weekend'>
              <MDBDropdown>
                <MDBDropdownToggle>{vendName}</MDBDropdownToggle>
                <MDBDropdownMenu>
                  {vendTabs.map((item) => {
                    if (item.id === vend){
                      return null
                    }
                    else {

                      return (
                        <MDBDropdownItem>
                          <MDBDropdownLink onClick={() => handleTabClick(item.id, item.name)} active={vend === item.id}>
                            {item.name}
                          </MDBDropdownLink>
                        </MDBDropdownItem>
                  )}})}
                  </MDBDropdownMenu>
                  </MDBDropdown>
                </div>
                  </>
              :
              <>
              
          <h3 className="col2-header"><b>Themed Weekends</b></h3>
          <div id='weekend'>
              <MDBTabs pills justify className='mb-3'>
                {vendTabs.map((item) => {
                  return (
                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick(item.id, item.name)} active={vend === item.id}>
                        {item.name}
                      </MDBTabsLink>
                    </MDBTabsItem>
              )})}
              </MDBTabs>
              </div>
              </>}
        </div>
          
        </div>
    </>
  );
}

function Artisan() {
  const weaponArray = ['Oakheart Armory', 'Royal Armory', 'Swords & Shields']
  const apparelArray = ['Boss Wench', 'Flying Cloud', 'Got Kilt & RenClothing Co', 'Hearts Delight', 'Lady MacSnood', 'Silk Dreams', 'Whimsical Wears', 'Jenniflowers']
  const hennaArray = ['Henna Body Art']
  const leatherArray = ['Crimson Chain Leather', 'WorksDeRosa Leather', 'Flying Cloud Leather', 'Renboots', 'Thatcher Leather', 'Flower Finery', 'The Leather Arts Store']
  const jewelryArray = ['Cand\'s Creations for U', 'Medieval Metal', 'Pandara Polaris', 'Ball and Chain', 'Museum Replica Jewelry', 'Thomas the Lapidary']
  const foodArray = ['JC\'s Carlic Market', 'Comfort Fun Foods and Nuts', 'Chocolate Moonshine', 'Nothing Bunt Cakes', 'Medieval Mixes']
  const readerArray = ['Ann Angel - Palm Reader', 'Williams Readings']
  const drynkwareArray = ['King of Cups', 'Fuglyware Pottery']
  const miscArray = [
    'Haller Glass', 'Historical Reseach Center', 'Teddy Bear Mobile', 'Reimaged By Luna',
    'Gypsy Sisters LLC', 'Hannabert Creations', 'Robbie G Theatre and Dance',
    'Ladies in Braiding', 'Olde World Treasures', 'Royal Cigar', 'Seymours of London',
    'Silk Road Traders', 'Steam Pop Creations', 'US Wood Toys', 'Torvik Crafts',
    'Wooden Roses', 'X Marques the Spotte', 'Essentially Twisted'
  ]

  const artisanArray = [
    {name: 'Weapons', list: weaponArray, key:'vendor-item'},
    {name: 'Apparel', list: apparelArray, key:'vendor-item'},
    {name: 'Henna', list: hennaArray, key:'vendor-item'},
    {name: 'Leather', list: leatherArray, key:'vendor-item'},
    {name: 'Jewelry', list: jewelryArray, key:'vendor-item'},
    {name: 'Food', list: foodArray, key:'vendor-item'},
    {name: 'Readers', list: readerArray, key:'vendor-item'},
    {name: 'Drykware', list: drynkwareArray, key:'vendor-item'},
    {name: 'Miscellaneous', list: miscArray, key:'vendor-item'}
  ]

  return (
    <>
      <div className='weekends'>
        <div className='vendors'>
          <h1><b>{vendTabs[0].name}</b></h1>
          <h4><i>Be sure to check out our vendors as you walk through the realm!</i></h4>
          <div className='vend'>

          {artisanArray.map((vendor) => {
            return (
              <MDBTable striped hover className={vendor.key} key={vendor.name}>
                <MDBTableHead>
                  <tr>
                    <th ><b>{vendor.name}</b></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody >
                {vendor.list.map((item) => {
                  return (
                    <>
                        <tr>
                          <td>{item}</td>
                        </tr>
                      </>
                      )
                    })}
                </MDBTableBody>
              </MDBTable>
            )
          })}
          </div>
        </div>
      </div>
    </>
  )
}

function Food() {
  const neptuneList = [
    'Fish N Chips', 
    'Just Chips', 
    'Loaded Chips', 
    'Chicken Strips',
    'Loaded Tater Tots',
    'Onion Rings',
    'Foot Long',
    'Corn Dog'
]

  const dragonsBreathList = [
    'Italian Sausage',
    'Bratwurst',
    'Hotdog',
    'Ruben Dog',
    'Sausage on a Stick',
    'Hamburger',
    'Cheeseburger',
    'Bacon Cheeseburger',
    'Bean Dog',
    'Veggie Burger',
    'Mac & Cheese Dog',
    'Potato Salad',
    'Coleslaw',
    'Bacon Wrapped Dog',
  ]

  const knightsWrapList = [
    'Chicken Caesar Wrap',
    'Southwest Chicken Wrap',
    'Buffalo Chicken Wrap',
    'BLT Wrap'
  ]

  const knightStickList = [
    'Chicken on a Stick',
    'Steak on a Stick',
    'Chicken Sandwich',
    'Chicken Teriyaki on a Stick',
    'Pig on a Stick (Pork Steaks & Bacon)'
  ]

  const badgerList = [
    'Pulled Pork',
    'Pork Steak & Bacon Stick',
    'Hamburger',
    'Cheeseburger',
    'Bacon Cheeseburger',
    'Pork Steak Sandwich',
    'Veggie Burger',
    'Potato Salad',
    'Coleslaw'
  ]

  const queensList = [
    'Chicken Quesadilla',
    'Cheese Quesadilla',
    'Broccoli Cheddar Bread Bowl',
    'Mac & Cheese Bread Bowl',
    'Loaded Potato Bread Bowl',
    'Chicken Pot Pie Bread Bowl'
  ]

  const kingsFeast = [
    'Turkey Leg',
    'Roasted Corn'
  ]

  const captainsList = [
    'Funnel Cake',
    'Fried Oreos',
    'Fried Strawberry',
    'Fried Poptarts',
    'Fried Pickles',
    'Fried Twinkies',
    'Jalapeno Poppers',
    'Fried Mac & Cheese'
  ]

  const princessList = [
    'Apple Cider Float',
    'Root Beer Float',
    'Chocolate Ice Cream',
    'Vanilla Ice Cream',
    'Strawberry Ice Cream',
    'Cookie Dough',
    'Caramel Blast',
    'Cookie Unicorn Droppings',
    'Unicorn Cake',
    'Unicorn Feed',
  ]

  const piratePizaList = [
    'Pepperoni Pizza',
    'Sausage Pizza',
    'Cheese Pizza',
    'Bacon Pizza',
    'Bosco Sticks'
  ]

  const greekList = [
    'Gyros',
    'Hummus & Pita',
    'Baklava'
  ]

  const joanOfArcList = [
    'Cheese Ravioli',
    'Beef Ravioli',
    'Mozzarella Sticks',
    'Loaded Fries',
    'Buffalo Boneless Wings',
    'BBQ Boneless Wings',
    'Garlic Parmesan Boneless Wings'
  ]

  const sinfulList = [
    'Funnel Cake',
    'Fried Oreos',
    'Fried Strawberry',
    'Fried Pop Tarts'
  ]

  const kettleList = [
    'Regular',
    'Unicorn Feed',
    'Flavored'
  ]

  const coffeeBeanList = [
    'Doughnuts',
    'Muffins',
    'Cinnamon Rolls',
    'Croissants'
  ]

  const shakNList = [
    'Lemon Shake-Up',
    'Orange Shake-Up',
    'Strawberry Shake-Up',
    'Lime Shake-Up',
    'Iced Coffee',
    'Hot Coffee',
    'Cider',
    'Cocoa'
  ]

  const knightNachoList = [
    'Nachos',
    'Walking Taco',
    'Soft Pretzel',
    'Watermelon'
  ]

  const foodArray = [
    {name: 'Badger BBQ', list: badgerList, key:'vendor-item'},
    {name: 'Captain\'s Cakes & Cannonballs', list: captainsList, key:'vendor-item'},
    {name: 'Coffee & Bean Bakery', list: coffeeBeanList, key:'vendor-item'},
    {name: 'Dragon\'s Breath', list: dragonsBreathList, key:'vendor-item'},
    {name: 'It\'s Greek to Me', list: greekList, key:'vendor-item'},
    {name: 'Joan of Arc', list: joanOfArcList, key:'vendor-item'},
    {name: 'Kettle Corn', list: kettleList, key:'vendor-item'},
    {name: 'King\'s Feast', list: kingsFeast, key:'vendor-item'},
    {name: 'Knights on a Stick', list: knightStickList, key:'vendor-item'},
    {name: 'Knights Nachos', list: knightNachoList, key:'vendor-item'},
    {name: 'Knights Wraps', list: knightsWrapList, key:'vendor-item'},
    {name: 'Neptune\'s', list: neptuneList, key:'vendor-item'},
    {name: 'Queen\'s Delight', list: queensList, key:'vendor-item'},
    {name: 'Pirates Pizza', list: piratePizaList, key:'vendor-item'},
    {name: 'Princess Sweets', list: princessList, key:'vendor-item'},
    {name: 'Shak\'n Not Stirr\'d', list: shakNList, key:'vendor-item'},
    {name: 'Sinful Pleasure', list: sinfulList, key:'vendor-item'},
  ]
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[1].name}</b></h1>
            <h4><i>Be sure to check out our vendors as you walk through the realm!</i></h4>
            <p>Pickle Carts can be found at Front Gate and Joust Field</p>
            <div className='vend'>
            {foodArray.map((vendor) => {
            return (
              <MDBTable striped hover className={vendor.key} key={vendor.name}>
                <MDBTableHead>
                  <tr>
                    <th ><b>{vendor.name}</b></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody >
                {vendor.list.map((item) => {
                  return (
                    <>
                        <tr>
                          <td>{item}</td>
                        </tr>
                      </>
                      )
                    })}
                </MDBTableBody>
              </MDBTable>
            )
          })}
            </div>
          </div>
      </div>
    </>
  )
}

function Games() {

  const activeList = [
    'Archery',
    'Ax Throwing',
    'Plinko Drinko',
    'High Striker',
    'Mug Slide',
    'Knife Throwing Booth',
    'Star Throw',
    'Tomato Torment',
  ]

  const activitiesList = [
    'Escape Room',
    'Buccaneer Bungee Bounce',
    'Caroucello',
    'Pony Rides',
    'Giant Rocking Horse',
    'Kid\'s Quest',
    'Scavenger Hunts',
    'Reptile Exhibit',
    'Royal Maze'
  ]

  const gamesArray = [
    {name: 'Get Active', list: activeList, descriptor: 'Stop by and participate in our thriving games. Prices and locations vary.', key: 'vendor-item'},
    {name: 'Get Active', list: activitiesList, descriptor: 'Seek out these features that make our festival magical.', key: 'vendor-item'}
  ]
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[2].name}</b></h1>
            <h4><i>Be sure to check out our vendors as you walk through the realm!</i></h4>
            <div className='vend'>
            {gamesArray.map((vendor) => {
            return (
              <MDBTable striped hover className={vendor.key} key={vendor.name}>
                <MDBTableHead>
                  <tr>
                    <th ><b>{vendor.name}</b></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody >
                  <tr>
                    <td>{vendor.descriptor}</td>
                  </tr>
                {vendor.list.map((item) => {
                  return (
                    <>
                        <tr>
                          <td>{item}</td>
                        </tr>
                      </>
                      )
                    })}
                </MDBTableBody>
              </MDBTable>
            )
          })}
            </div>
            <p><i>* Not all games and rides are included in the Festival Admission Ticket price.</i></p>
          </div>
      </div>
    </>
  )
}

function Musical() {

  const musicalArray = [
    {actName: '', img: ''},
  ]
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[3].name}</b></h1>
            <h4><i>Be sure to check out our musical acts as you walk through the realm!</i></h4>
            <div className='vend'>
              {musicalArray[0].actName !== '' ?
                musicalArray.map((music) => {
                  return (
                    <MDBCard style={{ maxWidth: '22rem' }} key={music.actName}>
                      <MDBCardImage src={music.img} position='top' alt={music.actName} />
                      <MDBCardBody>
                        <MDBCardTitle>{music.actName}</MDBCardTitle>
                      </MDBCardBody>
                    </MDBCard>
                  )
                }) :
                <p>Check Back Soon for our 2021 Musical Groups!</p>
              }
            </div>
          </div>
      </div>
    </>
  )
}

function Specialty() {
  
  const FAE_SCRIPT = ` Bring the folklore and mythos of the world to life as an elf, fairy, troll, ogre, sprite, pixie, or some other magical being we haven't  even thought of!
  As you might imagine, the mystical grove draws a great many wee folk, both etheral and not, so it is important to note that this is a very kid friendly environment!
  We host many group activities like story telling, fairy house construction, and tending to the fairy garden. We spend a great deal of time playing games with little folks and
  fellow fae, and simply entertaining guests to the wood with good natured revelry and the occasional practical joke. Join us in the grove and immerse yourself in another reality to explore your
  sense of wonder!
  `

  const FIGHTER_SCRIPT = `
  Fighter Script To Be Determined
  `

  const MERMAID_SCRIPT = `
  Discover the merfolk in their rustic cove. They have come from seas far and near to make your acquaintance. 
  These playful visitors enjoy bantering with those on two legs; curious to discover why they prefer land rather than sea.
  `

  const TRAVELERS_SCRIPT = `
  Traveler Script To Be Determined
  `

  const GUARDS_SCRIPT = `
  Guards Script To Be Determined
  `

  const VILLAGE_SCRIPT = `
  Village Script To Be Determined
  `

  const MARINERS_SCRIPT = `
  Mariners Script To Be Determined
  `

  const ROYAL_COURT_SCRIPT = `
  Royal Court Script To Be Determined
  `

  const guildArray = [
    {name: 'Royal Court', script: ROYAL_COURT_SCRIPT},
    {name: 'Royal Guards', script: GUARDS_SCRIPT},
    {name: 'Fae', script: FAE_SCRIPT},
    {name: 'Mermaids', script: MERMAID_SCRIPT},
    {name: 'Fighters', script: FIGHTER_SCRIPT},
    {name: 'Mariners', script: MARINERS_SCRIPT},
    {name: 'Travelers', script: TRAVELERS_SCRIPT},
    {name: 'Village', script: VILLAGE_SCRIPT},
  ]

  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[4].name}</b></h1>
            <h4><i>Meet the cast <Link to='/cast'>here</Link>!</i></h4>
            <div className='guilds'>
            {guildArray.map((guild) => {
                  return (
                    <MDBCard key={guild.name}>
                      <MDBCardBody>
                        <MDBCardTitle style={{fontVariant: 'small-caps'}}><b>{guild.name}</b></MDBCardTitle>
                        <MDBCardText style={{textAlign: 'left'}}>{guild.script}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  )
                })}
            </div>
          </div>
      </div>
    </>
  )
}

function Streets() {
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[5].name}</b></h1>
            <h4><i>If you know someone interested in performance in the lanes reach out!</i></h4>
            <div className='vend'>
            </div>
          </div>
      </div>
    </>
  )
}

export default EntertainmentVendor;
