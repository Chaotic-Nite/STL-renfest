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
  MDBDropdownLink
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
  const jewelryArray = ['Cand\'s Creationns for U', 'Medieval Metal', 'Pandara Polaris', 'Ball and Chain', 'Museum Replica Jewelry', 'Thomas the Lapidary']
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
          <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
          <div className='vend'>

          {artisanArray.map((vendor) => {
            return (
              <MDBTable striped hover className={vendor.key}>
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
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[1].name}</b></h1>
            <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
            <div className='vend'>
            </div>
          </div>
      </div>
    </>
  )
}

function Games() {
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[2].name}</b></h1>
            <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
            <div className='vend'>
            </div>
          </div>
      </div>
    </>
  )
}

function Musical() {
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[3].name}</b></h1>
            <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
            <div className='vend'>
            </div>
          </div>
      </div>
    </>
  )
}

function Specialty() {
  return (
    <>
      <div className='weekends'>
          <div className='vendors'>
            <h1><b>{vendTabs[4].name}</b></h1>
            <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
            <div className='vend'>
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
            <p><i>Be sure to check out our vendors as you walk through the realm!</i></p>
            <div className='vend'>
            </div>
          </div>
      </div>
    </>
  )
}

export default EntertainmentVendor;
