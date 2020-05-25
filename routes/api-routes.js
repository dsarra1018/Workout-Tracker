const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:_id", ({body,params}, res) => {
    Workout.findByIdAndUpdate(params._id,
        {
            $push: {
                exercises: body
            }
        }, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = router;