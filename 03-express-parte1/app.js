const express = require('express');
const Joi = require('@hapi/joi');
const app = express();

app.use(express.json());

const usuarios=[
    {id: 1, nombre: "chucho"},
    {id: 2, nombre: "emma"},
    {id:3, nombre: "rocio"}
]
//peticion
app.get('/', (req, res) => {
    res.send('hola mundo desde express');
});

app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
})

app.get('/api/usuarios/:id', (req, res) => {
    let usuario= existeUsuario(req.params.id)
    if(!usuario){
        res.status(404).send('El usuario no fue encontrado');
        return;
    }
    res.send(usuario)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}...`);
});


//envio de datos


app.post('/api/usuarios', (req, res) => {
    const {error, value} = validarUsuario(req.body.nombre);
    
    if(!error){
        const usuario = {
            id: usuarios.length +1,
            nombre: value.nombre
        }
        usuarios.push(usuario);
        res.send(usuario);
    }else{
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
    }
});


//actualizacion
app.put('/api/usuarios/:id', (req, res) => {
    let usuario= existeUsuario(req.params.id)
    if(!usuario){
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

  
    
    const {error, value} = validarUsuario(req.body.nombre);
    
    if(error){
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
        return;
    }

    usuario.nombre = value.nombre;
    res.send(usuario);
});


//eliminacion
app.delete('/api/usuarios/:id', (req, res) => {
    let usuario= existeUsuario(req.params.id)
    if(!usuario){
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);

    res.send(usuario);
});

const existeUsuario = (id) => {
    return(usuarios.find(u => u.id === parseInt(id)))
}

const validarUsuario = (nom) => {
    const schema = Joi.object({
        nombre: Joi.string()
            .min(3)
            .max(30)
            .required()
    
    });
    return (schema.validate({nombre: nom}));
}