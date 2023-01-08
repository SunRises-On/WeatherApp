import './App.css';
import React from 'react';
import {Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Weather from './component/Weather';
import PrivateRoutes from './component/PrivateRoutes';
import {setAuthToken} from './helpers/setAuthToken';

function App() {

  //check if already authenticated
  const token = sessionStorage.getItem("token");
  if(token){
    setAuthToken(token);
  }

   return(
    <div>
      <BrowserRouter>
           <Routes>
              <Route element ={<PrivateRoutes/>}>
                <Route path='weather' element={<Weather/>}/>
                {/* <Route path='other' element={<Other/>}/> */}
              </Route>
               <Route
                   exact path="/"
                   element={<Home/>}
               />
               <Route
                   path="login"
                   element={<Login/>}
               />
               <Route
                    path="register"
                    element={<Register/>}
               />
               {/* when we make an invalid path we will be redirected to home page component */}
               <Route path='*' element={<Navigate to="/"/>} />
               
           </Routes>
       </BrowserRouter>
    </div>
   );
}

export default App;
