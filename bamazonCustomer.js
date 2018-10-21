var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {
    console.log('Error Connecting: ' + err.stack)
  }
  console.log('Connected as ID ' + connection.threadId);
  listItems();
});

function listItems () {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
  questions();
}

function questions() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the item's ID? (Leave blank if you do not with to buy)",
      name: "itemID"
    },
    {
      type: "password",
      message: "How many units would you like to buy?",
      name: "unitsBuy"
    }
  ])
  .then(function(inquirerResponse) {
    var item = inquirerResponse.itemID - 1
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      var quantity = res[item].stock_quantity - inquirerResponse.unitsBuy;
      if (res[i].stock_quantity > inquirerResponse.unitsBuy) {
        // var sql = "UPDATE products SET stock_quantity = " quantity "WHERE item_id = " item;
        console.log(item);
        console.log(quantity);
      } else if (res[i].stock_quantity < inquirerResponse.unitsBuy) {
        console.log("Sorry, we do not have the stock to fulfill the request.")
      } else {
        console.log("Oops! Something went wrong!");
      }
    });
  });
}














