const router = require('express').Router()
const Character = require('../models/Character')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/characters', (req, res, next) => {
  Character.find()
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json(err))
})

router.get('/characters/:id', (req, res, next) => {
  Character.findById(req.params.id)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json(err))
})

router.post('/characters', (req, res, next) => {
  Character.create({ ...req.body })
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json(err))
})

router.patch('/characters/:id', (req, res, next) => {
  Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json(err))
})

router.delete('/characters/:id', (req, res, next) => {
  const { password } = req.headers
  if (!password) return res.status(401).json({ message: 'Epale putito' })
  Character.findByIdAndDelete(req.params.id)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json(err))
})

module.exports = router
