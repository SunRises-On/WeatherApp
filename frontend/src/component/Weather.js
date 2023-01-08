import { useEffect ,useState} from 'react';
import './style/App.css';
import React from 'react';
import TemperatureService from '../services/TemperatureService';
import ErrorService from '../services/ErrorService';
import TempHourly from './TempHourly';
function Weather() {
  console.log("We are in weather");
  const[temps, setTemps]=useState([]);
  
  //Refresh data periodically using setInterval
  useEffect(()=>{
      //Axios async/await, async - specifies the caller function
    //await - asynchronous function pauses until promise is resolved code changes  no 
    //'.then' anymore save response in 'const response'
    const getAllTemps = async()=>{
      try{
        const response = await TemperatureService.getTemperatures();
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

      }catch(error){
        ErrorService.handle(error);
      } 
    };
    const interval=setInterval(()=>{
      console.log("Polling database every 10 secs.");
      getAllTemps();
    },10000)
    return()=>clearInterval(interval);
  }, [temps]);

  return (
    <div className='App'>
      <header>
        secret information
      </header>
      <TempHourly temps={temps}/>
    </div>
  );
}
export default Weather;