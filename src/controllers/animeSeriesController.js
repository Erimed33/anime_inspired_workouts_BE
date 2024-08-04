const express = require('express')

const animes = express.Router()

const animeSeries = require('../models/anime_series')

// localhost:3300/animes/ (shows all) 

animes.get('/', (req, res) => {
    if (animeSeries) {
        res.json(animeSeries)
    } else {
        res.status(404).json({ error: "Anime Series not found"})
    }
    
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

// DELETE 

animes.delete('/:id', (req, res) =>{
    const { id } = req.params
    if (animeSeries[id]) {
        const deletedAnime = animeSeries.splice(id, 1)[0]
        const delAnimeTitle= deletedAnime.title
        res.json({message: `${delAnimeTitle} successfully deleted`})
    } else {
        res.json({ error: "Anime not found"})
    }
    
})




//UPDATE

animes.put('/:id', (req, res) =>{
    const { id } =req.params
    animeSeries[id] = req.body


})



module.exports = animes