import React from "react";
import './style/RegFormStyle.css';
import { setAuthToken } from "../helpers/setAuthToken";
import RegisterService from "../services/RegisterService";
import ErrorService from "../services/ErrorService";

export default function RegisterForm(){
    const handleSubmit = (username,email,password)=>{
        //request registered sample user
        const registerPayload = {
            username: 'jen',  
            email: 'jen@gmail.com',
            password: 'jen1'
        }
        console.log("username = " + registerPayload.username);
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
        <div className="form">
            <div className="form-body">
                <form
                onSubmit={(event)=>{
                    event.preventDefault()
                    const[username,email,password]=event.target.children;
                    handleSubmit(username,email,password);
                }}
                >
                    <div className="username">
                        <label className="form__label">Username:</label>
                        <input className="form__input" type="text" id="username" name="username" placeholder="username"/>
                    </div>
                    <div className="email" >
                        <label className="form__label">Email:</label>
                        <input className="form__input" type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label">Password:</label>
                        <input className="form__input" type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    
    )
}