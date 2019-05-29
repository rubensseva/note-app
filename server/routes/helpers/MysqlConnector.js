const mysql = require("mysql");

const fireQuery = query => {
  console.log("in fire query with query");
  console.log(query);
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: "ec2-18-224-229-87.us-east-2.compute.amazonaws.com",
      user: "rubenss",
      password: "Chicorea&11",
      database: "NoteAppDatabase"
    });
    console.log("initiating connection");
    connection.connect();
    console.log("connection initiated");
    connection.query(query, function(error, results, fields) {
      console.log("inside connection query");
      if (error) reject(error);
      console.log("resolving");
      resolve(results);
    });
    console.log("connection ended");
    connection.end();
  });
};

module.exports = { fireQuery };
