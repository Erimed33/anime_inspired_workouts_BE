const express =require('express')


const workouts = express.Router()

const workoutsArray = require('../models/inspired_workouts')

// whenever we hit workouts its goiing to route it here
workouts.get('/', (req, res) =>{
    if (workoutsArray) {
        res.json(workoutsArray)
    } else {
        res.status(404).json({ error: "Workouts not found"})
    }
    
})

// Show localhost:3300/workouts/0 (shows only one in that index)

workouts.get('/:id', (req, res) => {
    const { id } = req.params

    if (workoutsArray[id]) {
        res.status(200).json(workoutsArray[id])
    } else {
        res.status(404).json({ error: "Workout not found"})
    }
    
})

// CREATE


workouts.post('/', (req, res) => {
    workoutsArray.push(req.body)
    res.json(workoutsArray[workoutsArray.length - 1])
})

//DELETE 

workouts.delete('/:id', (req, res) =>{
    const { id } = req.params
    if (workoutsArray[id]) {
        const deletedWorkout = workoutsArray.splice(id, 1)[0]
    const delWorkoutName = deletedWorkout.title
    res.json({message: `${delWorkoutName} successfully deleted`})
    } else {
        res.json({ error: "Workout not found to be deleted."})
    }
    
})

//UPDATE

workouts.put('/:id', (req, res) =>{
    const { id } = req.params
    if (workoutsArray[id]) {
    workoutsArray[id] = req.body
    res.status(200).json(workoutsArray[id])
    } else {
        res.json({ error: "Workout not updated"})
    }

})




module.exports = workouts

