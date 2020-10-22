import React from "react";
import "./App.css";
import { RouteConstants } from "./utilities/constants";
/*Route */
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashboard from "./RAdmin/dashboard/dashboard";
import { PrivateRoute } from "./private-route";
import Login from "./RAdmin/Login/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path={RouteConstants.admin} component={AdminDashboard} />
          <Route path={RouteConstants.login} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
