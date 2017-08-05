const request = require('request');

const getWeather = (latitute,logitute, callback) =>{
   request({
     url : `https://api.darksky.net/forecast/c49fd48184a9736a83980135699d9f8e/${latitute},${logitute}`,
     json : true
   }, (error, response, body)=>{
        if(!error && response.statusCode === 200){
          callback(null, {
            current : body.currently.temperature,
            feelslike : body.currently.apparentTemperature
          })
        }else{
          callback("Unable to get Wether details");
        }
   })
}

module.exports.getWeather = getWeather;
