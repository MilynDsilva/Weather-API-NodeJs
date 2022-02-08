const express = require('express');
const routes = express.Router();
const request = require('request');
const axios = require('axios');
//const { getCurrentWeatherUsingPromise } = require('../model/methods')
const { getCurrentWeatherUsingAsync } = require('../model/methods')
const { getWeatherKarnataka }  = require('../model/methods') 
const { getCurrentWeatherUsingPromise }  = require('../model/methods') 


routes.get('/currentWeatherPromise',(request,response)=>{
    const PromiseObj =  getCurrentWeatherUsingPromise();
    console.log(PromiseObj);
    response.send(PromiseObj);
})

routes.get('/currentWeatherAsync',async(request,response)=>{
    const AsyncObj = await getCurrentWeatherUsingAsync();
    response.send(AsyncObj);
})

routes.get('/getWeather',async(request,response)=>{
    const Weather = await getWeatherKarnataka();
    response.send(Weather);
})

module.exports = routes;

//ref
//https://stackoverflow.com/questions/48980380/returning-data-from-axios-api
//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
//https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/