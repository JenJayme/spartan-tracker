const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/WorkoutModel");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// seeds only needed once to import data
// const seeds = require("./seeders/seed");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spartan-tracker", { useNewUrlParser: true, useFindAndModify: false });

//Better connection function, checks to see if collection exists.  If not, use seed.js.  If yes, don't use seed.js.  But throw an unhandled promise error on listCollections function.
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spartan-tracker", { 
//           useNewUrlParser: true,
//           useFindAndModify: false,
//           useUnifiedTopology: true
//         })
//         .then(function(client) {
//           console.log('Connection successful');
//           client.db.listCollections({name: 'Workout'})
//             .next(function(err, collinfo) {
//               if (!collinfo) { // The collection does not exist
//                   // Create collection and seed
//                   require('./seeders/seed.js');
//               }
//           });   
//         });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
