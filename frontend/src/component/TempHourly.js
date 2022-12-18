import React from 'react';
export default function TempHourly(props){
    const{temps}=props;
    console.log("we are in temp hourly");
    if(temps.length>0){
        return(
            <div>
                <table>
                    <thread>
                        <tr>
                            <th>Hour</th>
                            <th>Temperature</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            temps.map((temp)=>{
                                return(
                                    <tr key={temp.id}>
                                        <td>id={temp.id}</td>
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
        return(<h>Database error</h>)
    }
 }