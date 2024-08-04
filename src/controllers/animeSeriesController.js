const express = require('express')

const animes = express.Router()

const animeSeries = require('../models/anime_series')

// localhost:3300/animes/ (shows all) 

animes.get('/', (req, res) => {
    res.json(animeSeries)
})
// SHOW  localhost:3300/animes/1 (shows object in index 1)
animes.get('/:id', (req, res) => {
    const { id } = req.params
    if (animeSeries) {
        res.status(200).json(animeSeries[id])
    } else {
        res.status(404).json({ error: "Anime Series not found"})
    }
    
})

// CREATE 

animes.post('/', (req, res) => {
    animeSeries.push(req.body)
    res.json(animeSeries[animeSeries.length - 1])

})





module.exports = animes