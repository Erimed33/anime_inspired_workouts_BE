const express = require('express');
const workouts = express.Router();
const {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../queries/workoutQueries');
const { checkForTitleKey, checkForDuration, checkForExercises } = require('../validations/workoutValidations');

// whenever we hit workouts its going to route it here
workouts.get('/', async (req, res) => {
  try {
    const allWorkouts = await getAllWorkouts();
    res.json(allWorkouts);
  } catch (err) {
    res.status(404).json({ error: "Workouts not found" });
  }
});

// Show localhost:3300/workouts/0 (shows only one in that index)
workouts.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await getOneWorkout(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: "Workout not found" });
  }
});

// CREATE
workouts.post('/', checkForTitleKey, checkForDuration, checkForExercises, async (req, res) => {
  try {
    const newWorkout = await createWorkout(req.body);
    res.json(newWorkout);
  } catch (err) {
    res.status(400).json({ error: "Unable to create workout" });
  }
});

// DELETE 
workouts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await deleteWorkout(id);
    res.json({ message: `${deletedWorkout.title} successfully deleted` });
  } catch (err) {
    res.status(400).json({ error: "Workout not found to be deleted." });
  }
});

// UPDATE
workouts.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedWorkout = await updateWorkout(id, req.body);
    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(400).json({ error: "Workout not updated" });
  }
});

module.exports = workouts;


