const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glassesSchema = new Schema({
  name: String,
  color: String,
  price: Number,
  advert: String,
  productInfo: [String],
  image: String,
});

const shadesCollection = mongoose.model("shade", glassesSchema);

module.exports = shadesCollection;
