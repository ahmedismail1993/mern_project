import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/index";
function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default Routes;
