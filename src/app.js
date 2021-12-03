const express = require('express')
const app = express()
const cors = require('cors')
const unidades = require('./controllers/unidades')

const banco = require('./infra/sqlite-db')

//Middleware
app.use(express.json())
app.use(cors())

//rotas unidades
unidades(app, banco)
app.get('/', (req, res) => {
    res.send('api rodando')
})
module.exports = app