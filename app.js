const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require(`./clima/clima`);

console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const getLugar = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(getLugar.lat, getLugar.longt);
        return `El clima de ${ direccion } es ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);