/*jshint esversion: 6 */
/*jshint esversion: 8 */
const axios = require('axios');

const getCity = async (city) => {
    const encodedUrl = encodeURI(city);
    
    const url = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3234a4c065msh303fe813ead35a3p1dad73jsn44c10829618d'
        },
        url
    };

    try {
        const response = await axios(options);
        if (response.data.Results.length === 0 ) {
            const errMessage = `There's no data available for: ${city}`;
            return {
                errMessage
            };
        }

        const data = response.data.Results[0];
        
        const {name, lat, lon} = data;

        return {
            name, 
            lat, 
            lon
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    getCity
};

