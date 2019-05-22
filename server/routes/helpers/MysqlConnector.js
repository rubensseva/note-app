var mysql = require("mysql");

const fireQuery = query => {
  console.log("in fire query with query");
  console.log(query);
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
      host: "noteappdatabase.c3lkaicdughh.us-east-2.rds.amazonaws.com",
      user: "rubenss",
      password: "Chicorea&11",
      database: "NoteAppDatabase"
    });
    console.log("initiating connection");
    connection.connect();
    console.log("connection initiated");
    connection.query(query, function(error, results, fields) {
      console.log("inside connection query");
      console.log(results);
      if (error) reject(error);
      console.log("resolving");
      resolve(results);
    });
    console.log("connection ended");
    connection.end();
  });
};

module.exports = { fireQuery };
