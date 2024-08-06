const db = require('../db/dbConfig');

const getAllWorkouts = async () => {
  try {
    return await db.any('SELECT * FROM workout_routines');
  } catch (err) {
    throw err;
  }
};

const getOneWorkout = async (id) => {
  try {
    return await db.one('SELECT * FROM workout_routines WHERE id = $1', id);
  } catch (err) {
    throw err;
  }
};

const createWorkout = async (workout) => {
  try {
    return await db.one(
      'INSERT INTO workout_routines (anime_id, title, description, difficulty, duration, exercises, source_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        workout.anime_id,
        workout.title,
        workout.description,
        workout.difficulty,
        workout.duration,
        workout.exercises,
        workout.source_url,
      ]
    );
  } catch (err) {
    throw err;
  }
};

const deleteWorkout = async (id) => {
  try {
    return await db.one('DELETE FROM workout_routines WHERE id = $1 RETURNING *', id);
  } catch (err) {
    throw err;
  }
};

const updateWorkout = async (id, workout) => {
  try {
    return await db.one(
      'UPDATE workout_routines SET anime_id = $1, title = $2, description = $3, difficulty = $4, duration = $5, exercises = $6, source_url = $7 WHERE id = $8 RETURNING *',
      [
        workout.anime_id,
        workout.title,
        workout.description,
        workout.difficulty,
        workout.duration,
        workout.exercises,
        workout.source_url,
        id,
      ]
    );
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
