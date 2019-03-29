/*jshint esversion: 6 */
/*jshint esversion: 8 */
const axios = require('axios');

const getWeather = async (params) => {
    const {lat, lon} = params;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=02041ce99c9542c20c6ffdcbccf69c9f&units=metric`;
    
    const options = {
        method: 'GET',
        url
    };

    try {
        const response = await axios(options);
        if (response.data.main.length === 0 ) {
            const errMessage = `There's no data available for: ${params}`;
            return {
                errMessage
            };
        }

        const data = response.data.main.temp;
        
        return {
            temperature: data
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    getWeather
};
