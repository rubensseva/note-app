const express = require("express");

const router = express.Router();

const { fireQuery } = require("../helpers/MysqlConnector");

router.post("/addCardToTopic", (req, res) => {
  const { name, question, answer, topicId } = req.body;
  const query = `${"INSERT INTO Card (`name`, `question`, `answer`, `topicId`) " +
    "VALUES ('"}${name}','${question}','${answer}','${topicId}');`;
  console.log(query);
  fireQuery(query)
    .then(response => {
      console.log("addCard firequery success!");
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.post("/deleteCard", (req, res) => {
  const { cardId } = req.body;
  const query = `DELETE FROM Card WHERE cardId = '${cardId}';`;
  fireQuery(query)
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/getCardsByUserTopic", (req, res) => {
  console.log("fetching user cards by topic id. Printing cookies then body");
  console.log(req.cookies);
  console.log(req.body);
  const query = `SELECT DISTINCT C.cardId as id, C.name as name, C.question as question, C.answer as answer, C.topicId as topicId FROM Card AS C, Topic AS T WHERE T.userNameRef = "${
    req.cookies.noteapp
  }" AND C.topicId = "${req.body.topicId}";`;
  fireQuery(query)
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => res.status(404).json(err));
});

router.post("/getCardById", (req, res) => {
  const query = `SELECT * FROM Card AS C WHERE C.cardId = "${
    req.body.cardId
  }";`;
  fireQuery(query)
    .then(response => {
      if (response.length === 0) {
        return res.status(404).json({ msg: "not found" });
      }
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
});

router.post("/updateCardById", (req, res) => {
  const query = `UPDATE Card AS C Set C.name = "${
    req.body.name
  }", C.question = "${req.body.question}", C.answer = "${
    req.body.answer
  }" WHERE C.cardId = "${req.body.cardId}";`;
  fireQuery(query)
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
