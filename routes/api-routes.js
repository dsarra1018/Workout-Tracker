const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;