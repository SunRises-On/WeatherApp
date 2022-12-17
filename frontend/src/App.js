import { useEffect ,useState} from 'react';
import './App.css';
import TemperatureService from './services/TemperatureService';
import TempHourly from './component/TempHourly';
function App() {
  const[temps, getTemps]=useState('');
  
  const getAllTemps = ()=>{
    TemperatureService.getTemperatures().then(response =>{
      
      var allTemps = response.data;
      console.log(JSON.stringify(allTemps));
    })
    .catch((error)=>{
      console.log(error);
      console.log(error.reponse);
    });
  }

  //useEffect runs after the component is rendered
  // brackets as an argument are necessary so the code doesn't
  // run in an infinite loop. The second argument tells useEffect
  // to only render if certain values have changed. 
  //Since we are are passing an empty value we're telling useEffect to 
  //only run on render. .. This will be changed.
  useEffect(()=>{
    getAllTemps();
  }, []);

  return (
    <div className="App">
      <TempHourly temps={temps}/>
    </div>
  );
}

export default App;
