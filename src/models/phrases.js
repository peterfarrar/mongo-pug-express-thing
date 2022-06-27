const mongoose = require('mongoose')

const PhraseSchema = new mongoose.Schema({
  idiom: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  meaning: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  }
})

let Phrase = mongoose.model('Phrase', PhraseSchema)

module.exports = { Phrase } 