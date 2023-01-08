import React from "react";
import { Navigate, Routes, Route, Router } from "react-router-dom";
 
//history
//import { history } from './helpers/history';
 
//pages
import Home from "./Home"
import Login from "./Login";
import Register from "./Register";
import Weather from "./Weather";
import RouteGuard from "./RouteGuard";
 
function rout() {
   return (
       <Router >
           <Routes>
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
               <Navigate to="/" />
               
           </Routes>
       </Router>
   );
};
export default rout;