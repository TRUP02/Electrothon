const express = require('express')
const router = express.Router()
const Machine = require('../models/machine')

router.get('/', async (req, res) => {
    try {
        const machines = await Machine.find()
        res.status(200).json(machines)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {
    const machine = new Machine({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type
    })
    try {
        const newMachine = await machine.save()
        res.status(201).json(newMachine)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})

router.patch('/', (req, res) => {

})

module.exports = router