const express = require('express');
const routes = express.Router();
const request = require('request');
const axios = require('axios');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=24&lon=35&exclude=hourly&appid=f4f12b255ab76e0cec4a75e1e81ff562';
const urlOne = 'https://api.openweathermap.org/data/2.5/weather?q=Karnataka,in&appid=f4f12b255ab76e0cec4a75e1e81ff562';

const getCurrentWeatherUsingPromise = ()=>{
    axios.get(url)
        .then((response) => {
            //return response.data;
            console.log(response.data)
  });
}

const getCurrentWeatherUsingAsync = async ()=>{
    try {
        const response = await axios.get(url);
        return response.data;
    } 
    catch (error) {
        console.log("Error:"+error);
    }
 }

const getWeatherKarnataka = async()=>{
    try {
        const response = await axios.get(urlOne);
        return response.data;
    } 
    catch (error) {
        console.log("Error:"+error);
    }
}
//module.exports = { getCurrentWeatherUsingPromise }
module.exports.getCurrentWeatherUsingAsync = getCurrentWeatherUsingAsync
module.exports.getWeatherKarnataka= getWeatherKarnataka
module.exports.getCurrentWeatherUsingPromise = getCurrentWeatherUsingPromise;