const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion para clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}