import { useEffect ,useState} from 'react';
import './App.css';
import React from 'react';
import TemperatureService from './services/TemperatureService';
import TempHourly from './component/TempHourly';
function App() {
  const[temps, setTemps]=useState([]);
  useEffect(()=>{
    getAllTemps();
  }, [temps]);
  const getAllTemps = ()=>{
    TemperatureService.getTemperatures().then(response=>{
      //array of objects
      const happy = response.data.temps.allTemps;
      console.log(happy);
      //convert array into string using JSON.stringify() method
      //convert the string again to array of objects using JSON.parse() method
      //result is a deep copy that isn't a reference, but a new memory location!
      setTemps(JSON.parse(JSON.stringify(happy)));
      console.log("first");
      console.log("happy at (5) : " + JSON.stringify(happy.at(5)));
      console.log("temps : " + temps);
      console.log("temps at (5) : " + JSON.stringify(temps.at(0)));

      // setTemps(JSON.stringify(happy));
      // console.log("second...");
      // console.log("happy at (5) : " + JSON.stringify(happy.at(5)));
      // console.log("temps : " + temps);
      // console.log("temps at (5) : " + temps.at(5));
    })
    .catch((error)=>{
      console.log(error);
      console.log(error.reponse);
    });
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <TempHourly temps={temps}/>
    </div>
  );
}

export default App;
