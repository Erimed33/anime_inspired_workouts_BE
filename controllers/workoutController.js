const express =require('express')


const workouts = express.Router()

const workoutArray = require('../models/workouts')

// whenever we hit workouts its goiing to route it here
workouts.get('/', (req, res) =>{
    res.workoutArray
})

