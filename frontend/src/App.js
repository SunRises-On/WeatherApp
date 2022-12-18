import { useEffect ,useState} from 'react';
import './App.css';
import React from 'react';
import TemperatureService from './services/TemperatureService';
import TempHourly from './component/TempHourly';
function App() {
  const[temps, setTemps]=useState([]);
  
  //Refresh data periodically using setInterval
  useEffect(()=>{
    getAllTemps();
    const interval=setInterval(()=>{
      console.log("Polling database every 10 secs.");
      getAllTemps();
    },10000)
    return()=>clearInterval(interval);
  }, []);
  //Axios async/await, 
  //async - specifies the caller function
  //await - asynchronous function pauses until promise is resolved
  //code changes  no '.then' anymore save response in 'const response'
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
        if(error.response){
          //Request completed but server responded with an error
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }else if(error.request){
          //Request completed but no response received from server.
          console.log(error.request);
        }else{
          //Error occured while setting up request.
          console.log("Error : " + error.message);
        }
        
      }
      
    }

  return (
    <div className="App">
      <h1>hello world</h1>
      <TempHourly temps={temps}/>
    </div>
  );
}

export default App;
