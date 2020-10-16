const axios = require('axios');

const getClima = async(lat, lng) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=3b05bdf1dfbb834fbdac3403f12b55ed&units=metric`,
    });

    const resp = await instance.get();

    return resp.data.main.temp;
}

module.exports = {
    getClima
}