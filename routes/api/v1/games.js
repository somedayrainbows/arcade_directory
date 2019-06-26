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
      res.status(500).send({ error })
    })
})

router.get('/:id', function(req, res, next) {
  Game.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(game => {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify(game))
    })
    .catch(error => {
      res.setHeader('Content-Type', 'application/json')
      res.status(500).send({ error })
    })
})

router.post('/', function(req, res, next) {
  Game.create({
    title: req.body.title,
    price: req.body.price,
    releaseYear: req.body.releaseYear,
    active: req.body.active
  })
  .then(game => {
    res.setHeader('Content-Tpye', 'application/json')
    res.status(201).send(JSON.stringify(game))
  })
  .catch(error => {
    res.setHeader('Content-type', 'application/json')
    res.status(500).send({ error })
  })
})

module.exports = router