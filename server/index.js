var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

var Users = require('./routes/api/Users');
var Subjects = require('./routes/api/Subjects')

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser('my_secret_key'));



app.use('/api/user', Users);
app.use('/api/usercontent', Subjects);

app.get('/', (req, res) => {
  res.send("welcome!");
})

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
