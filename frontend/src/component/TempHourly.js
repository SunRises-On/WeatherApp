import React from 'react';
export default function TempHourly(props){
    const{temps}=props;
    console.log("we are in temp hourly");
    if(temps.length>0){
        return(
        temps.map((temp)=>{
            return(
                <div key = {temp.id}>
                    <span>id={temp.id}</span>
                    <p>{temp.temperature}&deg;</p>
                </div>
            )
        })
    )}else{
        return(<h>Database error</h>)
    }
 }