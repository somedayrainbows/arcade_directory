const express = require('express')
const router = express.Router()
const Game = require('../../../models').Game

router.get('/', function(req, res, next) {
  Game.findAll()
  .then(games => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(games))
  })
  .catch(error => {
    res.setHeader('Content-Type', 'application/json')
    res.status(500).send({error})
  })
})

module.exports = router
