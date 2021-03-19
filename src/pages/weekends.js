import React from "react";
import { Route, Switch } from "react-router";

function Weekends() {
  return (
    <>
      <Switch>
        <Route path="/weekends#pets-pirates-ale">Pets Pirates and Ale</Route>
        <Route path="/weekends">
          Testing, Will tell dates for all weekends
        </Route>
      </Switch>
    </>
  );
}

export default Weekends;
