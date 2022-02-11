const express = require('express')
const router = express.Router()
const machine = require('../models/machine')


router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/:id', (req, res) => {

})

router.patch('/', (req, res) => {

})

module.exports = router