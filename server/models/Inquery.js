const mongoose = require("mongoose");

const inquerySchema = new mongoose.Schema({
  name: String,
  phone:{
    type:String,
    unique:true,
  },
  
  date: String,
  guests: Number
});

module.exports = mongoose.model("Inquery", inquerySchema);