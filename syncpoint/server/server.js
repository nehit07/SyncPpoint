const mongoose = require('mongoose');
const express = require("express");
const app = express();

const DB = 'mongodb+srv://nehitvasavada7:nehit%4007@cluster0.bvobioo.mongodb.net/SyncPoint?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
  console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

// middleware
const middleware = (req, res, next) => {
  console.log("Middleware");
}

middleware();

app.get("/", (req, res) => {
  res.send(`Hello World from the server`);
});

app.get("/profile", middleware, (req, res) => {
  res.send(`Hello World from the server profile`);
});

app.get("/login", (req, res) => {
  res.send(`Hello World from the server login`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello World from the server sign up`);
});

app.listen(3000, () => {
  console.log(`Server is running at port no 3000`);
});