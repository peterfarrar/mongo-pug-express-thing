const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { port, corsOptions } = require('../options')
const routes = require('./routes/index')
const path = require('node:path')
require('./lib/mongoose') // initialize mongo connection

const app = express()
app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/ping', (_req, res) => {
  res.send("pong")
})

app.use('/', routes.home)
app.use('/meaning', routes.meaning)

const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

module.exports = server