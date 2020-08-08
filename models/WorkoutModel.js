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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
