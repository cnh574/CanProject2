const express = require("express");
const router = express.Router();
const shade = require("../models/glassesSchema.js");
const methodOverride = require("method-override");
const seedData = require("../models/sunglasses.js");
router.use(methodOverride("_method"));

// SEED DATA ROUTE
router.get("/seed", (req, res) => {
  Car.create(seedData, (err, createdSeedData) => {
    res.redirect("/shades");
  });
});

// // NEW shades view  ROUTE
// router.get("/new", (req, res) => {
//   res.render("new.ejs");
// });

module.exports = router;
