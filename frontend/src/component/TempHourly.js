import React from 'react';
export default function TempHourly(props){
    const{temps}=props;
    console.log("we are in temp hourly");
    console.log("props : " + props);
   // console.log("props : " + JSON.stringify(props.at(5)));
    console.log(props.id);
    console.log(props.temperature);
    return(
        temps.map((temp,index)=>{
            console.log(temp);
            return(
                <div key = {temp.id}>
                    <p>id={temp.id}</p>
                    <p>{temp.temperature}</p>
                </div>
            )
        })
    )
 }
// export default function TempHourly(props){
//     const displayTemps =(props)=>{
     
//         const{menu, temps}=props;
//         if(temps.length >0){
//             return(
//                 temps.map((temp,index)=>{
//                     console.log(temp);
//                     return(
//                         <div key={temp.id}>
//                             <p>{temp.temperature}</p>
//                         </div>
//                     )
//                 })
//             )
//         }
//         else{
//             return (<h>Database error: No temperatures</h>)
//         }
//     }
// }    