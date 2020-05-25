const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => Date().now
    },
    exercises: [
        {
            type: 
            {
                type: String,
                required: "Enter Type of Exercise"
            },
            name: 
            {
                type: String,
                trim: true,
                required: "Enter Name of Exercise"
            },
            duration: 
            {
                type: Number
            },
            weight: 
            {
                type: Number
            },
            reps: 
            {
                type: Number
            },
            sets: 
            {
                type: Number
            }
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercises) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;