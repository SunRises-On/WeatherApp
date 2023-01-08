import './App.css';
import React from 'react';
import { Navigate, Routes, Route, Router } from "react-router-dom";
 
//history
//import { history } from './helpers/history';
 
//pages
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Weather from './component/Weather';
import RouteGuard from './component/RouteGuard';

import {setAuthToken} from './helpers/setAuthToken';

function App() {

  //check if already authenticated
  const token = sessionStorage.getItem("token");
  if(token){
    setAuthToken(token);
  }

   return(
    <div>
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
    </div>
   );
}

export default App;
