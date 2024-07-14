const express = require("express");
const TrackData = require("./src/model/TrackData");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("API response correctly")
})

app.get('/requirements', function(req, res) {
  TrackData.find().then(function(trackers) {
    res.send(trackers);
  })
})

app.post('/insert', function(req, res) {
  console.log(req.body);
  var tracker = {
    name: req.body.name,
    field: req.body.field,
    institution: req.body.institution,
    category: req.body.category,
    duration: req.body.duration
  }
  var tracker = new TrackData(tracker);
  tracker.save().then(function() {
    res.send("Tracker saved successfully");
  })
})

app.listen(5000, () => {
  console.log("server started...")
});