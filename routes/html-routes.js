const path = require('path')

module.exports = function(app) {
    console.log('Engaging html-routes.js');
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/exercise.html"))
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"))
    });

    app.get("/stats", (req, res) => {
        console.log('running stats html route');
        res.sendFile(path.join(__dirname, "./public/stats.html"))
    });

}