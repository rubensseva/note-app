var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

var Users = require('./routes/api/Users');
var Subjects = require('./routes/api/Subjects')
var Topics = require('./routes/api/Topics')
var Cards = require('./routes/api/Cards')

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());



app.use('/api/user', Users);
app.use('/api/subjects', Subjects);
app.use('/api/topics', Topics)
app.use('/api/cards', Cards)

app.get('/', (req, res) => {
  res.send("welcome!");
})

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
