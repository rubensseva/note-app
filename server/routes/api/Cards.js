var express = require('express');
var router = express.Router();

var { fireQuery } = require('../helpers/MysqlConnector');
var { cookieConfig } = require('../helpers/config');


router.post('/addCardToTopic', (req, res) => {
    const { name, question, answer, topicId } = req.body;
    const query = "INSERT INTO Card (`name`, `question`, `answer`, `topicId`) " +
      "VALUES ('" + name + "','" + question + "','" + answer + "','" + topicId + "');"
    console.log(query)
    fireQuery(query).then((response) => {
      console.log("addCard firequery success!")
      console.log(response)
      res.json(response)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({msg: "error", err})
    })
})


router.post('/getCardsByUserTopic', (req, res) => {
    console.log('fetching user cards by topic id. Printing cookies then body')
    console.log(req.cookies)
    console.log(req.body)
    const query = 'SELECT DISTINCT C.cardId as id, C.name as name, C.question as question, C.answer as answer FROM Card AS C, Topic AS T WHERE T.userNameRef = "' + req.cookies.noteapp + '" AND C.topicId = "' + req.body.topicId + '";';
    fireQuery(query).then((response) => {
        console.log(response)
        res.json(response)
    })
    .catch((err) => res.status(404).json(err))
})

module.exports = router;