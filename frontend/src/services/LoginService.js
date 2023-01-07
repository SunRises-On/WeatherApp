import React from 'react';
import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/auth/authenticate";
class LoginService{

    login(){
        return axios.post(LOGIN_API_BASE_URL);
    }

}
export default new LoginService();