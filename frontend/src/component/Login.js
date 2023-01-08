import React from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
import LoginService from "../services/LoginService";
import ErrorService from "../services/ErrorService";
function Login() {
    //request registered sample user
    const handleSubmit=(email,password)=>{
        //sample user
        const loginPayload = {
            email: 'jen@gmail.com',
            password: 'jenn1'
          }
        
          LoginService.login(loginPayload).then(response =>{
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
        <form
            onSubmit={(event)=>{
                event.preventDefault()
                const [email, password]= event.target.children;
                handleSubmit(email, password);
            }}

        >

            <label>
              Email:
              <input type="email" id="email" name="email"/>
            </label><br/>

            <label>
              Password:
              <input type="password" id="password" name="password"/>
            </label><br/>
            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email"/><br/>

            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password"/><br/>

            <input type="submit" value="Submit"/>

        </form>
      );
  }
  export default Login;