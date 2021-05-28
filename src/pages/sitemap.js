import React from "react";
import Navigation from "../components/navigation/Navigation.js";
import {sitemapList} from '../lists/sitemap-list'

function Sitemap() {
  return (
    <>
    <Navigation />
      <h1 className="page-header">Sitemap</h1>
      {sitemapList.map(item => {
        return (
          <>
            <a style={{fontSize: '1.5rem'}} href={item.link}>{item.name}</a>
            <hr />
          </>
        )
      })}
    </>
  );
}

export default Sitemap;
