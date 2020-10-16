const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ encodeUrl }?json=1`,
    });

    const resp = await instance.get();


    if (resp.data.standard.city === '') {
        throw new Error(`No hay resultado ${ dir }`);
    }

    const direccion = resp.data.standard.city;
    const lat = resp.data.latt;
    const longt = resp.data.longt;

    return {
        direccion,
        lat,
        longt
    }

}

module.exports = {
    getLugarLatLng
}