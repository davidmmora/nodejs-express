'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/product', (req,res) => {
    // res.send(200, {products: []}) DEPRECADA
    res.status(200).send({products: []})
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    //res.send(200, {message: 'El producto se ha recibido'}) DEPRECADA
    res.status(200).send({message: 'El producto se ha recibido'})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId' , (req, res) =>{

})

mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true} , (err, res) => {
    if (err){
        console.log(`Error al conectar con la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida')

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })

})

