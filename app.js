const express =require('express')
const app = express()
const workoutController = require('./controllers')

require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Welcome to Erika's App. Workouts inspired by anime!")
})

app.use(('/workouts', workoutController))

module.exports = app