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
    questions();
  });
  
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
      type: "input",
      message: "How many units would you like to buy?",
      name: "unitsBuy"
    }
  ])
  .then(function(inquirerResponse) {
    var item = inquirerResponse.itemID - 1

    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      var quantity = res[item].stock_quantity - inquirerResponse.unitsBuy;
      var product = res[item].product_name

      if (res[item].stock_quantity >= inquirerResponse.unitsBuy) {
        var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: quantity
          },
          {
            item_id: item
          }
        ],
        function(err, res) {
          console.log("Thank you for buying " + inquirerResponse.unitsBuy + " " + product + "!");
          console.log(item);
        }); 
      } else if (res[item].stock_quantity < inquirerResponse.unitsBuy) {
        console.log("Sorry, we do not have the stock to fulfill the request.")
      } else {
        console.log("Oops! Something went wrong!");
      }
    });
  });
}














