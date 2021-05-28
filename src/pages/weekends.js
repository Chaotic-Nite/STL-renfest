import React from "react";
import Navigation from "../components/navigation/Navigation";


function Weekends() {
  return (
    <>
      <Navigation />
      <h1 className="page-header">Themed Weekends</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width"></div>
          <div className="col2">
            <h3 className="col2-header">Weekend Information</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weekends;
