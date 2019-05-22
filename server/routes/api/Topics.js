var express = require("express");
var router = express.Router();

var { fireQuery } = require("../helpers/MysqlConnector");
var { cookieConfig } = require("../helpers/config");

router.get("/", (req, res) => {
  console.log("fetching user topics");
  console.log(req.cookies);
  const query =
    'SELECT * FROM Topic WHERE userNameRef = "' + req.cookies.noteapp + '";';
  fireQuery(query)
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => res.status(404).json(err));
});

router.post("/addTopic", (req, res) => {
  console.log("adding a topic");
  console.log(req.body);
  if (!req.cookies.noteapp) {
    res.status(404).json({ msg: "unauthorized" });
  }
  const { name, description } = req.body;
  const query =
    "INSERT INTO Topic (`name`, `description`,`userNameRef`) " +
    "VALUES " +
    "('" +
    name +
    "', '" +
    description +
    "', '" +
    req.cookies.noteapp +
    "');";
  fireQuery(query)
    .then(response => {
      res.json({ response, msg: "success" });
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;
