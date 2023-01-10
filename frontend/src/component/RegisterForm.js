import React, {useState} from "react";
import './style/RegFormStyle.css';
import { setAuthToken } from "../helpers/setAuthToken";
import RegisterService from "../services/RegisterService";
import ErrorService from "../services/ErrorService";

export default function RegisterForm(){
    const [username_, setUsername] = useState(null);
    const [email_, setEmail] = useState(null);
    const [password_,setPassword] = useState(null);
    //const handleSubmit= (username,email,password)=>{
    const handleSubmit =()=>{
        //request registered sample user
        const registerPayload = {
            username: username_,  
            email: email_,
            password: password_
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
         <div className="form">
             <div className="form-body">
                <form
                    onSubmit={(event)=>{
                        event.preventDefault()
                        // const[username,email,password]=event.target.children;
                        //handleSubmit(username,email,password);
                        handleSubmit();
                    }}
                >
                    <div className="username">
                        <label className="form__label">Username:
                            <input className="form__input" type="text" id="username" name="username" placeholder="Username" onChange={e=>setUsername(e.target.value)} />
                        </label><br/>
                    </div>
                    <div className="email" >
                        <label className="form__label">Email:
                            <input className="form__input" type="email" id="email" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        </label><br/>
                    </div>
                    <div className="password">
                        <label className="form__label">Password:
                            <input className="form__input" type="password" id="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        </label><br/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
             </div>
         </div>
    
    );
}