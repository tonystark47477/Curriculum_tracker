const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://melbinkmadhu:melbin1234567@cluster0.z48zfz0.mongodb.net/");

const TrackerSchema = new mongoose.Schema({
  name: String,
  field: String,
  institution: String,
  category: String,
  duration: Number
});

const TrackerData = mongoose.model('Tracker', TrackerSchema);

module.exports = TrackerData;