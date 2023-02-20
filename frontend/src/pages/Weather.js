import { useEffect ,useState} from 'react';
import '../component/style/App.css';
import React from 'react';
import TemperatureService from '../services/TemperatureService';
import ErrorService from '../services/ErrorService';
import TempHourly from '../component/TempHourly';
function Weather() {
  console.log("We are in weather");
  const[temps, setTemps]=useState([]);
  
  //Refresh data periodically using setInterval
  useEffect(()=>{
    function getAllTemps(){
      TemperatureService.getTemperatures().then(response=>{
        console.log(response);
        const happy = response.data.temps.allTemps;
        //array of objects
        console.log(happy);
        //convert array into string using JSON.stringify() method
        //convert the string again to array of objects using JSON.parse() method
        //result is a deep copy that isn't a reference, but a new memory location!
        setTemps(JSON.parse(JSON.stringify(happy)));
        console.log("first");
        console.log("happy at (5) : " + JSON.stringify(happy.at(5)));
        console.log("temps : " + temps);
        console.log("temps at (5) : " + JSON.stringify(temps.at(0)));
      }).catch(error=>{
        console.log("Error from Weather.js");
        ErrorService.handle(error);
      })    
    };
        
    getAllTemps();
    const interval=setInterval(()=>{
      console.log("Polling database every 10 secs.");
      getAllTemps();
    },10000)
    return()=>clearInterval(interval);
  }, [temps]);

  return (
    <div className='App'>
      <TempHourly temps={temps}/>
      <div>
      </div>
    </div>
  );
}
export default Weather;