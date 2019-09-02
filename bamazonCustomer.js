var mysql = require("mysql");
var inquirer = require("inquirer");

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
  //connection.end();
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
    buySomething();
  });
};

function buySomething() {
  inquirer.prompt([{
      type: "input",
      name: "id",
      message: "What is the ID of the item you would like to buy?"
    },
    {
      type: "input",
      name: "quantity",
      message: "How many would you like to buy?"
    }
  ]).then(function (res) {
    var itemId = res.id;
    var itemQuantity = res.quantity;
    itemTotal(itemId, itemQuantity)
  });
};


function itemTotal(id, currentStock) {
  connection.query("SELECT * FROM Products WHERE item_id=" + id, function (err, data) {
    if (err) throw err;

    if (currentStock <= data[0].stock_quantity) {
      var total = data[0].price * currentStock;

      var newStock = data[0].stock_quantity - currentStock
      var query = ("UPDATE Products SET stock_quantity = " + newStock + " WHERE item_id = " + id);
      //console.log(query)
      connection.query(query, function (err, res) {
        if (err) throw err;
        //console.log(res)
        console.log("Thank you, your total is " + total);
        buyMore()

      })
    } else {
      console.log("Sorry, insufficient quantity!")
      buyMore();
    };
  });

  function buyMore() {
    inquirer.prompt([{
      type: "confirm",
      name: "buyMore",
      message: "Would you like to buy something else?"
    }]).then(function(userInput) {
      // console.log(userInput.buyMore);
   if(userInput.buyMore===true){
     bamazonInit();
  } else {
    console.log("Thank you, please come again!");
    connection.end()
  }
    });
  };
  console.log("-----------------------------------------------------------------------------")

};