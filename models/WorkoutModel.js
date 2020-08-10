const mongoose = require("mongoose");
const Exercise = require("./ExerciseModel");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  //EXERCISE TYPE
    type: {
      type: String,
    },
  //EXERCISE NAME
    name: {
      type: String,
    },
  //EXERCISE DURATION
    duration: {
      type: Number,
    },
  //EXERCISE WEIGHT  
    weight: {
      type: Number,
    },
  //EXERCISE REPS
    reps: {
      type: Number,
    },
  //EXERCISE SETS  
    sets: {
      type: Number,
    },
  });

const WorkoutSchema = new Schema({

//WORKOUT DATE
  day: {
    type: Number,
    default: Date.now
  },
//TOTAL DURATION FOR DAY-WORKOUT
  total_duration: {
    type: Number,
  },
//TOTAL DURATION FOR DAY-WORKOUT
  total_weight: {
    type: Number,
    default: 0
  },
//SPECIFIC EXERCISES DONE IN DAY-WORKOUT
  exercises: {
    type: Array,
    default: []
  }
});

WorkoutSchema.methods.setTotalDuration = function(){

  console.log("Running setTotalDuration function")
  for (const exercise of this.exercises) {
      console.log(exercise)
      this.total_duration += exercise.duration
  }
  console.log(this.total_duration)
  return this.total_duration

}

// const Exercise = mongoose.model("Exercise", ExerciseSchema);

const Workout = mongoose.model("Workout", WorkoutSchema);

// Workout.createCollection().then(function (collection) {
//   console.log('Workout collection has been created.');
// });


module.exports = Workout;
