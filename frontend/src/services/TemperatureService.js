import React from 'react';
import axios from 'axios';

const WEATHER_API_BASE_URL = "http://localhost:8080/api/v1/hourly";
class TemperatureService{

    getTemperatures(){
        return axios.get(WEATHER_API_BASE_URL);
    }

}
export default new TemperatureService();