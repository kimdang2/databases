// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat'
// });

// con.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected!');
// });

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// module.exports = con;


//sequelize
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = db;