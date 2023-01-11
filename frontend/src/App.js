import './App.css';
import React from 'react';
import {Navigate, Routes, Route, Outlet } from "react-router-dom";

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Weather from './pages/Weather';
import PrivateRoutes from './component/PrivateRoutes';
import {setAuthToken} from './helpers/setAuthToken';
//component
import NavBar from './component/NavBar';

function BasicLayout(){
  return(
    <>
      <NavBar/>
      <Outlet />
    </>
  )
}


function App() {

  //check if already authenticated
  const token = sessionStorage.getItem("token");
  if(token){
    setAuthToken(token);
  }

   return(
    <div >
           <Routes>
              <Route element ={<PrivateRoutes/>}>
                <Route path='weather' element={<Weather/>}/>
                {/* <Route path='other' element={<Other/>}/> */}
              </Route>
              <Route path="/" element={<BasicLayout/>}>
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
              </Route>
               {/* when we make an invalid path we will be redirected to home page component */}
               <Route path='*' element={<Navigate to="/"/>} /> 
          </Routes>
    </div>
   );
}

export default App;
