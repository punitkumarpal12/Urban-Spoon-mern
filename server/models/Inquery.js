const mongoose = require("mongoose");

const inquerySchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  guests: Number
});

module.exports = mongoose.model("Inquery", inquerySchema);