import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
 
//history
import { history } from './helpers/history';
 
//pages
import Home from "./component/HomePage";
import Login from "./component/Login";
import Register from "./Register";
import Weather from "./Weather";
import RouteGuard from "./RouteGuard";
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <Route
                   exact
                   path="/"
                   component={Home}
               />
               <Route
                   path="/login"
                   component={Login}
               />
               <Route
                    path="/register"
                    component={Register}
               />
               <RouteGuard
                path="/weather"
                component={Weather}
               />
               <Redirect to="/" />
               
           </Switch>
       </Router>
   );
}
 
export default Routes