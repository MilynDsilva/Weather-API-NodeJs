const express = require('express')
const app = express();
const request = require('request');
const debug = require('debug');
const currentWeather = require('./routes/currentWeather');

app.use(express.json());
app.use('/',currentWeather);


const port = process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`Connected to port ${port}`)
    //debug(`Connected to port ${port}`);
});

module.exports = app;