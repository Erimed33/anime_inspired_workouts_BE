const express =require('express')


const workouts = express.Router()

const workoutArray = require('../models/inspired_workouts')

// whenever we hit workouts its goiing to route it here
workouts.get('/', (req, res) =>{
    res.json(workoutArray)
})

// Show localhost:3300/workouts/0 (shows only one in that index)

workouts.get('/:id', (req, res) => {
    const { id } = req.params

    if (workoutArray[id]) {
        res.status(200).json(workoutArray[id])
    } else {
        res.status(404).json({ error: "Workout not found"})
    }
    
})

// CREATE


workouts.post('/', (req, res) => {
    workoutArray.push(req.body)
    res.json(workoutArray[workoutArray.length - 1])
})


module.exports = workouts

