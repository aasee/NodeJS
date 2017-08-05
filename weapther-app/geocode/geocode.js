const request = require('request');

const getGeoCodeAddress = (address, callback) =>{
  if(!address){
    address = 'kanchipuram';
  }
  request({
     url: `http://maps.google.com/maps/api/geocode/json?address=${address}`,
     json: true
  },(error, response,body)=>{
    if(error){
      callback("Network failure!");
    }else if(body.status === 'ZERO_RESULTS'){
      callback("Invalid Address");
    }else if(body.status === 'OK'){
      callback(null, {
        address : body.results[0].formatted_address,
        latitute : body.results[0].geometry.location.lat,
        logitute: body.results[0].geometry.location.lat
      })
    }
  });
};

module.exports = {
  getGeoCodeAddress
}
