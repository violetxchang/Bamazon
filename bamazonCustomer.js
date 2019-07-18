var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  //your port
  port: 3306,

  // Your username
  user: "violetchang",

  // Your password
  password: "Ax34wo79!",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  bamazonInit();
  // console.log("connected as id " + connection.threadId);
  connection.end();
});

function bamazonInit() {
  connection.query("SELECT * FROM bamazonDB.products", function (err, res) {
    if (err) throw err;
    console.log("-------------------------------Welcome to Bamazon-------------------------------");
    for (var i = 0; i < res.length; i++) {
console.log("Item ID: ", res[i].item_id, " • ", "Product Name: ", res[i].product_name, " • ", "Price: ", res[i].price)
console.log("-----------------------------------------------------------------------------")
    }
    console.log("-----------------------------------------------------------------------------")
  })
}