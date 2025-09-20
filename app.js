const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const animeSeriesController = require('./controllers/animeSeriesController')
const workoutController = require('./controllers/workoutController')
require('dotenv').config()

// security middleware
app.use(helmet())

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// logging middleware
app.use(morgan('combined'))

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