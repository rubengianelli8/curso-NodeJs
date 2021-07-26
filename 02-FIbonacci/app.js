const serie = require('./serie');

let argv = process.argv;
let valor = argv[2].split('=')[1];

serie.crearSerie(valor)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))