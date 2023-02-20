import React from 'react';
import './style/TempHourlyStyle.css';
export default function TempHourly(props){
    const{temps}=props;
    console.log("we are in temp hourly");
    if(temps.length>0){
        return(
            <div class = "container">
                <table>
                    <thead>
                        <tr>
                            <th >Hour</th>
                            <th >Temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temps.map((temp)=>{
                                return(
                                    <tr key={temp.id}>
                                        <td>{temp.id}</td>
                                        <td>{temp.temperature}&deg;</td>
                                    </tr>    
                                )
                            })   
                        }
                    </tbody>
                </table>
            </div>
            )
    }else{
        return(<header>Database error</header>)
    }
 }