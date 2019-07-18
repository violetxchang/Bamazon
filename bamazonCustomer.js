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

connection.connect(function(err) {
  if (err) throw err;
  buyProduct();
  console.log("connected as id " + connection.threadId);
  connection.end();
});

function buyProduct(){
  inquirer
  .prompt({
    name: "buy",
    type: "list",
    message: "What would you like to buy?",
    choices: [
      "Hydrating Moisturizer",
      "Soothing Moisturizer",
      "Enriched Body Lotion",
      "Clear Quartz Luminizer",
      "Amethyst Luminizer",
      "Noni Glow Face Oil",
      "Noni Radiant Eye Oil",
      "Body Exfoliator",
      "Noni Glow Sleeping Mask",
      "Turmeric Brightening Mask"
    ]
  })
  .then(function(answer){
    switch(answer.action){

    }
  })
}