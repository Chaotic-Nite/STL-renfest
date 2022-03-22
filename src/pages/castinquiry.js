import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle, 
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import SocialMedia from "../components/social-media/SocialMedia.js";
import SmallWarningSign from "../components/homepage-content/warning/SmallWarning.js";
import ContactForm from "../components/castform/CastForm";

function CastInquiry() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleTabClick = (value) => {
    if (value === '') {
      return;
    }
  };

  const filterName = (value) => {
    return
  }

  useEffect(() => {
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
      <h1 className="page-header">Themed Inquiry</h1>
      <div className="margin-width two-col Inquiry-col2">
        <div className='col1'>
          <MDBTabsContent>
            <MDBTabsPane show={'Inquiry===This'}>
                <ContactForm />
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty  
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty
            </MDBTabsPane>
            <MDBTabsPane show={'Inquiry===This'}>
                Empty
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
        <div className='col2 Inquiry-colend'>
            {isMobile ?
              <>
          <div id='weekend'>
              <MDBDropdown>
                <MDBDropdownToggle>{listInquiry.map(filterName)}</MDBDropdownToggle>
                <MDBDropdownMenu>
                  {listInquiry.map((item) => {
                    if (item.id === wknd){
                      return null
                    }
                    else {

                      return (
                        <MDBDropdownItem key={item.id}>
                        <MDBDropdownLink onClick={() => handleTabClick(item.id)} active={'Inquiry' === item.id}>
                          {item.short}
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                  )}})}
                  </MDBDropdownMenu>
                  </MDBDropdown>
                  <SmallWarningSign />

                </div>
                  </>
              :
              <>
              
          <h3 className="col2-header"><b>Cast Options</b></h3>
          <div id='weekend'>
              <MDBTabs pills justify className='mb-3'>
                {listInquiry.map((item) => {
                  return (
                    <MDBTabsItem key={item.id}>
                      <MDBTabsLink onClick={() => handleTabClick(item.id)} active={'Inquiry' === item.id}>
                        {item.short}
                      </MDBTabsLink>
                    </MDBTabsItem>
              )})}
              </MDBTabs>
              <SocialMedia />
              </div>
              </>}
        </div>
          
        </div>
    </>
  );
}



export default CastInquiry;
