const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glassesSchema = new Schema({
  name: String,
  style: String,
  color: String,
  lensColor: [String],
  price: Number,
  image: String,
});

const shadesCollection = mongoose.model("shade", glassesSchema);

module.exports = shadesCollection;
