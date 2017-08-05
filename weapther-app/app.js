
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.getGeoCodeAddress('', (error, addressResult) =>{
   if(error){
     console.log(error);
   }else{
     console.log('Address Resul \n'+JSON.stringify(addressResult));
     weather.getWeather(addressResult.latitute, addressResult.logitute, (error, weatherResult) => {
          if(error){
            console.log(error);
          }else{
            console.log(` Weather Result is ${weatherResult.current} and feels like ${weatherResult.feelslike}`);
          }
     });

   }
});
