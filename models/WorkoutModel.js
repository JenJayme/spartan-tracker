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
    type: Date,
    default: Date.now
  },
  //TOTAL DURATION FOR DAY-WORKOUT
  // total_duration: {
  //   type: Number,
  // },
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

// WorkoutSchema.methods.setTotalDuration = function(){
//   console.log("Running setTotalDuration function")
//   .set(function (v) {
//     for (var i = 0; i < exercises.length; i++) {
//       this.total_duration += exercises[i].duration;
//       console.log(total_duration);
//     }
//   })
//   console.log(this.total_duration)
//   return this.total_duration
// }

WorkoutSchema.methods.setTotalDuration = function(exercises){
  console.log("Running setTotalDuration function");

  // for (var i = 0; i < Workout.exercises.length; i++) {
  //   this.total_duration += Workout.exercises[i].duration;
  //   console.log(total_duration);
  var total_duration;
  for (const exercise of this.exercises) {
      console.log(exercise)
      total_duration += exercise.duration
  }
  // console.log('exercise duration', exercise.duration);
  console.log('total duration', total_duration);
  return this.total_duration
}

const Workout = mongoose.model("Workout", WorkoutSchema);

// Workout.createCollection().then(function (collection) {
//   console.log('Workout collection has been created.');
// });


module.exports = Workout;
