const mongoose = require("mongoose");

const glassesSchema = new mongoose.Schema({
  name: String,
  style: String,
  color: String,
  lensColor: [String],
  price: Number,
  image: String,
});

const shadesCollection = mongoose.model("shade", glassesSchema);

module.exports = shadesCollection;
