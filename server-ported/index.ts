import mongoose from 'mongoose';
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

import Users from './api/Users';
import Subjects from './api/Subjects';
import Topics from './api/Topics';
import Cards from './api/Cards';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", Users);
app.use("/api/subjects", Subjects);
app.use("/api/topics", Topics);
app.use("/api/cards", Cards);

var uri = "mongodb://localhost:27017/note-app-test";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get("/test", (req, res) => {
  res.send("welcome!");
});

app.get("/test", (req, res) => {
  res.send("welcome!");
});
console.log(__dirname);

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
