//const datos = require('./datos');
//datos.log("chucho");

//USANDO PATH
/*const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath);*/


//USANDO OS----------------------------------------------------------------------

//const os = require('os');

//let memoriaLibre = os.freemem();
//let memoriaTotal = os.totalmem();

//console.log("memoria libre: " +memoriaLibre);
//console.log("memoria total: "+memoriaTotal);

//USANDO FILESYSTEM-----------------------------------------------------------------

// const fs = require('fs');

 //const archivos = fs.readdirSync('./');
 //console.log(archivos);

// const archivos2 = fs.readdir('./', function(err, files){
  //   if(err){
    //     console.log('error: '+err)
    // }else{
     //    console.log('resultado:' + files)
   //  }
 //})


 //USANDO MODULO EVENTS--------------------------------------------------------------------
 //const eventEmitter = require('events');

// const emitter = new eventEmitter;

 //registrar el listener
// emitter.on('mensajeLogger', (arg) => {
//     console.log('listener llamado', arg);
 //})

//registrar el evento
//emitter.emit('mensajeLogger', {id:1, url:"chucho.com"});

//USANDO MODULO HTTP----------------------------------------------------------------------------
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("hola  mundo");
        res.end();
    }
});

/*server.on('connection', (puerto)=> {
    console.log('nueva conexion...')
})*/

server.listen(3000);

console.log('servidor escuchando en el puerto 3000');

