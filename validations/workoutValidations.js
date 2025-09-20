const checkForTitleKey = (req, res, next) =>{
    if (req.body.title) {
        next()

    } else {
        res.status(400).json({error: "Workout must contain a title"})
    }
}

const checkForDuration = (req, res, next) => {
    if(req.body.duration && Number.isInteger(req.body.duration) && req.body.duration > 0) {
        next()
    } else {
        res.status(400).json({ error: "Workout must contain a valid duration (positive integer)"})
    }
}
}

const checkForExercises = (req, res, next) => {
    if (req.body.exercises && Array.isArray(req.body.exercises) && req.body.exercises.length > 0) {
        next();
    } else {
        res.status(400).json({ error: "Workout must contain exercises (non-empty array)" });
    }
};


module.exports = { 
    checkForTitleKey, 
    checkForDuration,
    checkForExercises

 }