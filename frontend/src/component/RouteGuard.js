import React from 'react';
import {Route,Navigate} from 'react-router-dom';
//Route Guard component is an
//authentication middleware.
//switch to redux and 
//redux middleware
const RouteGuard =()=>{
    console.log("in route guard");
    let flag=hasJWT();
    function hasJWT(){
        let flag = false;

        //check if user has JWT token
        sessionStorage.getItem("token") ? flag=true : flag=false

        return flag;
    }

    if(!flag){
        return <Navigate to="login"/>;
    }
}
export default RouteGuard;
