const express = require("express");

const router = express.Router();

const { fireQuery } = require("../helpers/MysqlConnector");

router.get("/", (req, res) => {
  res.send("usercontent api");
});

router.post("/addSubject", (req, res) => {
  const { signedCookies } = req; // get signed cookies
  console.log("signed-cookies:", signedCookies);
  console.log(signedCookies.noteapp);
  if (signedCookies.noteapp !== req.body.userNameRef) {
    res
      .status(404)
      .json({ msg: "Something went wront. Maybe unauthenticated" });
  }

  const query = `${"INSERT INTO Subject " +
    "(`name`, " +
    "`userNameRef`) " +
    "VALUES " +
    "('"}${req.body.name}', '${req.body.userNameRef}');`;

  console.log(query);
  fireQuery(query)
    .then(result => {
      console.log("printing ans");
      console.log(result);
      if (result) {
        console.log("success");
        return res.json({ msg: "success" });
      }
      return res.status(404).json({ msg: "user not found" });
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.get("/about", function(req, res) {
  res.send("About this wiki");
});

module.exports = router;
