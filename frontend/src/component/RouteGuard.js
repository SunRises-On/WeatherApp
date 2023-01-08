import React from 'react';
import {Route,Navigate} from 'react-router-dom';
//Route Guard component is an
//authentication middleware.
//switch to redux and 
//redux middleware
const RouteGuard =({component:Component, ...rest})=>{
    function hasJWT(){
        let flag = false;

        //check if user has JWT token
        sessionStorage.getItem("token") ? flag=true : flag=false

        return flag
    }

    return(
        <Route {...rest}
            render={props=>(
                hasJWT()?
                    <Component{...props}/>
                    :
                    <Navigate link to='login'/>
            )}
        />
    );
};
export default RouteGuard;