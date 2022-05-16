// const express = require("express");
// const router = express.Router();
// const app = express();
// const Shade = require("../models/glassesSchema.js");
// const methodOverride = require("method-override");
// const seedData = require("../models/sunglasses.js");
// app.use(methodOverride("_method"));

// SEED DATA ROUTE
// app.get("/seed", (req, res) => {
//   Shade.create(seedData, (err, createdSeedData) => {
//     console.log("data imported");
//     res.redirect("/shades");
//   });
// });

// // NEW shades view  ROUTE
// app.get("/new", (req, res) => {
//   res.render("new.ejs");
// });

// // CREATE NEW Shades  post ROUTE
// app.post("/", (req, res) => {
//   Shade.create(req.body, (error, createdshades) => {
//     res.redirect("/shades");
//   });
// });

// module.exports = router;
