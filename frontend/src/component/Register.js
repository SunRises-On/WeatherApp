import React from "react";
import { setAuthToken } from "../helpers/setAuthToken";
import RegisterService from "../services/RegisterService";
import ErrorService from "../services/ErrorService";
function Register() {
  
    const handleSubmit = (username,email,password)=>{
        //request registered sample user
        const registerPayload = {
            username: 'jen',  
            email: 'jen@gmail.com',
            password: 'jenn1'
        }
        RegisterService.register(registerPayload).then(response =>{
          //get token from response
          const token = response.data.token;
          //set JWT token to sessionStorage
          sessionStorage.setItem("token",token);
          //set token to axios common header
          setAuthToken(token);
          //redirect user to weather temps
          window.location.href='/weather';
        })
          .catch(error=>ErrorService.handle(error));
    };

    return(
        <form>
            <label for="username">Username</label><br/>
            <input type="username" id="username" name="username"/><br/>

            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email"/><br/>

            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password"/><br/>

            <input type="submit" value="Submit"/>
        </form>
    );
}
export default Register;