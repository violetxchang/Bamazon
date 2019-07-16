var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  //your port
  port: 7777,

  // Your username
  user: "violetchang",

  // Your password
  password: "Ax34wo79!",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});