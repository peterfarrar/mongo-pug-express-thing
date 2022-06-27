const mongoose = require('mongoose')
const { mongoUrl } = require('../../options')

mongoose.Promise = global.Promise
mongoose.connect(mongoUrl, { useNewUrlParser: true })

module.exports = { mongoose }