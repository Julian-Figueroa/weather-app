/*jshint esversion: 6 */
/*jshint esversion: 8 */
const {getCity} = require('./utils/RapiAPI');
const {getWeather} = require('./utils/openWeather');
const city = process.env.CITY;


getCity(city)
 .then((data) => {
    //console.log('Done: ', data);
    getWeather(data)
     .then((temp) => {
         console.log(`The temperature of the city of ${data.name} is:  ${temp.temperature}`);
     })
     .catch(err => console.log('Err GetWeather: ', err));
 })
 .catch(err => console.log('Err GetCity: ', err)
 );
