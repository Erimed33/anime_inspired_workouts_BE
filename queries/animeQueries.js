const db = require('../db/dbConfig');

const getAllAnimes = async () => {
  try {
    return await db.any('SELECT * FROM anime_series');
  } catch (err) {
    throw err;
  }
};

const getOneAnime = async (id) => {
  try {
    return await db.one('SELECT * FROM anime_series WHERE id = $1', id);
  } catch (err) {
    throw err;
  }
};

const createAnime = async (anime) => {
  try {
    return await db.one(
      'INSERT INTO anime_series (title, description) VALUES ($1, $2) RETURNING *',
      [anime.title, anime.description]
    );
  } catch (err) {
    throw err;
  }
};

const deleteAnime = async (id) => {
  try {
    return await db.one('DELETE FROM anime_series WHERE id = $1 RETURNING *', id);
  } catch (err) {
    throw err;
  }
};

const updateAnime = async (id, anime) => {
  try {
    return await db.one(
      'UPDATE anime_series SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [anime.title, anime.description, id]
    );
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllAnimes,
  getOneAnime,
  createAnime,
  deleteAnime,
  updateAnime,
};
