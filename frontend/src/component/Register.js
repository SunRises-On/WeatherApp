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
        <form
          onSubmit={(event)=>{
                event.preventDefault()
                const[username,email,password]=event.target.children;
                handleSubmit(username,email,password);
          }}
        >
            <label>
              Username:
              <input type="text" id="username" name="username"/>
            </label><br/>

            <label>
              Email:
              <input type="email" id="email" name="email"/>
            </label><br/>

            <label>
              Password:
              <input type="password" id="password" name="password"/>
            </label><br/>

            <input type="submit" value="Submit"/>
        </form>
    );
}
export default Register;