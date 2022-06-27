const express = require('express')
const { Phrase } = require('../models/phrases')

const router = express.Router()

router.post('/', (req, res) => {
  const { id } = req.body
  Phrase.findById(id).then(data => {
    const { idiom, meaning } = data
    res.send({ idiom, meaning })
  })
})

module.exports = router