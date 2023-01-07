import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
 
//history
import { history } from './helpers/history';
 
//pages
import HomePage from "./component/HomePage"
import LoginPage from "./component/Login"
import Weather from "./Weather";
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <Route
                   exact
                   path="/"
                   component={HomePage}
               />
               <Route
                   path="/login"
                   component={LoginPage}
               />
               <Redirect to="/" />
               <Route
                path="/weather"
                component={Weather}
               />
           </Switch>
       </Router>
   );
}
 
export default Routes