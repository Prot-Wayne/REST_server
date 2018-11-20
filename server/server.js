require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {

        res.json('getUsuario')
})

app.post('/usuario', (req, res) => {
    
    let body = req.body;

    if ( body.nombre === undefined) {

        res.status(400).json({
            ok:false,
            mensaje: "Error "
        })
    } else {
        res.json({
            body
        });
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    let user = {
        id,
        nombre: "Leon_Musk"
    }

    
    res.json({
        user,
    
    })
})

app.delete('/usuario', (req, res) => {
    res.json('deleteUsuario')
})

app.listen(process.env.PORT, ()=>{
    console.log('escuchando puerto 3000');
})