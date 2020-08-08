const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
//WORKOUT DATE
  type: {
    date: Date,
  },
//EXERCISE NAME
  total_duration: {
    type: Number,
  },

  total_weight: {
    type: Number,
  }
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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
