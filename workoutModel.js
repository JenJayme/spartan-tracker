const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
