import React from 'react';
import axios from 'axios';

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v1/auth/register";
class RegisterService{

    register(){
        return axios.post(REGISTER_API_BASE_URL);
    }

}
export default new RegisterService();