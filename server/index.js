var express = require('express');
var path = require('path')
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

app.get('/test', (req, res) => {
  res.send("welcome!");
})
console.log(__dirname)
if (process.env.NODE_ENV === 'production') {
  console.log('Serving static react build for production');
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}



const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
