//___________________
//Dependencies
//___________________
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
require("dotenv").config();
// const shadesController = require("./");
const Shade = require("./models/glassesSchema.js");
const seedData = require("./models/sunShades.js");
const methodOverride = require("method-override");
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static("public"));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form

//____

// Routes
//___________________
// localhost: 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
//
// });

// SEED DATA ROUTE
app.get("/seed", (req, res) => {
  Shade.create(seedData, (err, createdSeedData) => {
    console.log("data imported");
    res.redirect("/index");
  });
});

// // NEW shades view  ROUTE
app.get("/new", (req, res) => {
  res.render("new.ejs");
});
// home page
app.get("/home", (req, res) => {
  res.render("home.ejs");
});

// // CREATE NEW Shades  post ROUTE
app.post("/", (req, res) => {
  Shade.create(req.body, (error, createdshades) => {
    res.redirect("/index");
  });
});

// // GET ALL shades FOR INDEX ROUTE
app.get("/index", (req, res) => {
  Shade.find({}, (error, allShades) => {
    res.render("index.ejs", {
      shades: allShades,
    });
  });
});

// // SHOW SPECIFIC shades ROUTE
app.get("/shades/:id", (req, res) => {
  Shade.findById(req.params.id, (err, foundShades) => {
    res.render("show.ejs", {
      shades: foundShades,
    });
  });
});

// DELETE SPECIFIC shades ROUTE
app.delete("/:id", (req, res) => {
  Shade.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/index");
  });
});

// // EDIT EXISTING shades PAGE ROUTE
app.get("/:id/edit", (req, res) => {
  Shade.findById(req.params.id, (err, foundShades) => {
    res.render("edit.ejs", {
      shades: foundShades,
    });
  });
});

// // EDIT A SPECIFIC shades ROUTE
app.put("/:id", (req, res) => {
  Shade.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/index");
    }
  );
});

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, () => {
  console.log("connect to mongo");
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("Listening on port:", PORT));
