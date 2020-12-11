import React from "react";
import App from '../components/App';
import Page2 from '../components/Page2';
import { Route, Switch } from "react-router-dom";

// We could use react-router-dom to manage multiple pages/routes
function Routes() {
  return (
    
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  )
}

export default Routes;
