import React from "react";
import {sitemapList} from '../lists/sitemap-list'

function Sitemap() {
  return (
    <>
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
