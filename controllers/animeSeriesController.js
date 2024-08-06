const express = require('express');
const animes = express.Router();
const {
  getAllAnimes,
  getOneAnime,
  createAnime,
  deleteAnime,
  updateAnime,
} = require('../queries/animeQueries');
const { checkForTitleKey } = require('../validations/animeValidations');

// localhost:3300/animes/ (shows all) 
animes.get('/', async (req, res) => {
  try {
    const allAnimes = await getAllAnimes();
    res.json(allAnimes);
  } catch (err) {
    res.status(404).json({ error: "Anime Series not found" });
  }
});

// SHOW  localhost:3300/animes/1 (shows object in index 1)
animes.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const anime = await getOneAnime(id);
    res.status(200).json(anime);
  } catch (err) {
    res.status(404).json({ error: "Anime Series not found" });
  }
});

// CREATE 
animes.post('/', checkForTitleKey, async (req, res) => {
  try {
    const newAnime = await createAnime(req.body);
    res.json(newAnime);
  } catch (err) {
    res.status(400).json({ error: "Unable to create anime" });
  }
});

// DELETE 
animes.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnime = await deleteAnime(id);
    res.json({ message: `${deletedAnime.title} successfully deleted` });
  } catch (err) {
    res.status(400).json({ error: "Anime Delete Unsuccessful" });
  }
});

// UPDATE
animes.put('/:id', checkForTitleKey, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAnime = await updateAnime(id, req.body);
    res.status(200).json(updatedAnime);
  } catch (err) {
    res.status(400).json({ error: "Anime cannot be updated" });
  }
});

module.exports = animes;
