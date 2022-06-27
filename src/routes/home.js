const express = require('express')
const { Phrase } = require('../models/phrases')

const router = express.Router()

router.get('/', (_req, res) => {
  Phrase.find({}).then(data => {
    const phrases = data.map((item) => {
      return { idiom: item.idiom, id: item._id.toString() }
    })
    res.render('home', { phrases })
  })
})

module.exports = router