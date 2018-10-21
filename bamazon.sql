DROP DATABASE IF EXISTS bamazon;
Create Database bamazon;

Alter User 'root'@'localhost' Identified With mysql_native_password BY 'password';

Use bamazon;

Create Table products (
	item_id Integer Auto_Increment Not Null,

   product_name VarChar(20),

   department_name VarChar(20),

   price Decimal(10,4),

   stock_quantity Integer(100),
   
   Primary Key (item_id)
);

SELECT * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo", "Electronics", "99.99", 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats", "Electronics", "399.99", 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mints", "Food", "1.99", 99);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", "999.99", 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Punching Bag", "Exercise", "99.99", 23);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hummingbird Feeder", "Outdoors", "9.99", 45);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T Shirt", "Clothing", "39.99", 34);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", "1199.99", 290);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charging Cable", "Electronics", "9.99", 153);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Teddy Bear", "Toys", "9.99", 108);