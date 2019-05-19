var mysql      = require('mysql');

const fireQuery = (query) => {
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
      host     : 'noteappdatabase.c3lkaicdughh.us-east-2.rds.amazonaws.com',
      user     : 'rubenss',
      password : 'Chicorea&11',
      database : 'NoteAppDatabase'
    });
    connection.connect();
    connection.query(query, function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
    })
    connection.end();
})};
 

module.exports = { fireQuery }