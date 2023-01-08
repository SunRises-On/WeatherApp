import { useEffect ,useState} from 'react';
import {Redirect, Switch, Route, Router, Routes} from "react-router-dom";

import './App.css';
import React from 'react';
import rout from './component/rout';

function App() {


   return(
    <div>
      <rout/>
    </div>
   );
}

export default App;
