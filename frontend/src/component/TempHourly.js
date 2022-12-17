import React from 'react';

export default function TempHourly(props){
    const displayTemps =(props)=>{
     
        const{menu, temps}=props;
        if(temps.length >0){
            return(
                temps.map((temp,index)=>{
                    console.log(temp);
                    return(
                        <div key={temp.id}>
                            <p>{temp.temperature}</p>
                        </div>
                    )
                })
            )
        }
        else{
            return (<h>Database error: No temperatures</h>)
        }
    }
}    