//Serie fibonacci
//1 1 2 3 5 8 13 21 34 55 89 144.....

const fs = require('fs');

const crearSerie = (cantidadNumeros) =>{

    return new Promise((resolve, reject) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '1\t';


        for(let i=2; i <= cantidadNumeros-1; i++){
            serie += `${fibo2}\t`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        fs.writeFile('fibonacci.txt', serie, (err)=>{
            if(err) 
                reject("error al crear el archivo");
            else
                resolve('el archivo fue creado con exito');
        })
    })
}

module.exports = {
    crearSerie
}