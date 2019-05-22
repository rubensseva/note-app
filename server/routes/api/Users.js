var express = require('express');
var router = express.Router();

var { fireQuery } = require('../helpers/MysqlConnector');
var { cookieConfig } = require('../helpers/config');

router.get('/', (req, res) => {
    res.send("user api")
})

// Home page route.
router.post('/loginUser', (req, res) => {
  console.log("login user with credentials")
  console.log(cookieConfig)
  const query = 'SELECT * FROM User WHERE userName = "' + req.body.name + '" AND password = "' + req.body.password + '"';
  console.log(query)
  fireQuery(query).then((result) => {
      console.log("printing ans");
      console.log(result)
      res.cookie('noteapp', result[0].userName, cookieConfig);
      return res.json({msg: "success"});
  })
  .catch((err) => {
      console.log("something went wrong")
      console.log(err)
      return res.status(404).json(err);
  })
})

router.get('/cookieLogin', (req, res) => {
  console.log("cookie login")
  console.log(cookieConfig)
  console.log(JSON.stringify(req.cookies))
  const query = 'SELECT * FROM User WHERE userName = "' + req.cookies.noteapp + '";';
  console.log(query)
  fireQuery(query).then((result) => {
      console.log("printing ans");
      console.log(result)
      if (result.length == 1) {
        return res.json({msg: "success", name: result[0].userName});
      } else {
        return res.status(404)({msg: "user not found"})
      }
  })
  .catch((err) => {
      return res.status(500).json(err);
  })
})



router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;