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
  
    duration: {
      type: Number,
    },
  
    weight: {
      type: Number,
    },
  
    reps: {
      type: Number,
    },
  
    sets: {
      type: Number,
    },
  
  });

const WorkoutSchema = new Schema({

  //WORKOUT DATE
  day: {
    type: Date,
  },
//EXERCISE NAME
  total_duration: {
    type: Number,
  },

  total_weight: {
    type: Number,
  },

  exercises: [ExerciseSchema]
});

WorkoutSchema.methods.setTotalDuration = function(){

  console.log("Running setTotalDuration function")
  for (const exercise of this.exercises) {
      console.log(exercise)
      this.totalDuration += exercise.duration
  }
  console.log(this.totalDuration)
  return this.totalDuration

}

// const Exercise = mongoose.model("Exercise", ExerciseSchema);

const Workout = mongoose.model("Workout", WorkoutSchema);

// Workout.createCollection().then(function (collection) {
//   console.log('Workout collection has been created.');
// });


module.exports = Workout;
