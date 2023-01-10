import './App.css';
import React from 'react';
import {Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Weather from './pages/Weather';
import PrivateRoutes from './component/PrivateRoutes';
import {setAuthToken} from './helpers/setAuthToken';
//component
import Header from './component/Header';

function App() {

  //check if already authenticated
  const token = sessionStorage.getItem("token");
  if(token){
    setAuthToken(token);
  }

   return(
    <div >
      <Header/>
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
