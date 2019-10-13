const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})



router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

})


router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedKeys = ["completed", "description"]
    const isValidKeys = updates.every((task) => allowedKeys.includes(task))

    try {
        const _id = req.params.id

        if (!isValidKeys) {
            return req.status(400).send({
                 error: "Invalid parameters, you tried to update wrong keys" 
                })
        }
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send({
                 error: "task with id " + _id + " not exist" 
                })
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findByIdAndDelete(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router