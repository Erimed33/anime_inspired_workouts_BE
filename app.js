const express =require('express')
const app = express()
const cors = require('cors')
const animeSeriesController = require('./src/controllers/animeSeriesController')
const workoutController = require('./src/controllers/workoutController')
require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("Welcome to Erika's App. Workouts inspired by anime!")
})

app.use('/animes', animeSeriesController)
app.use('/workouts', workoutController)


app.get("*", (req, res) => {
    res.status(404).send("Page Not Found")
})

module.exports = app