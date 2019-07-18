DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(70) NOT NULL,
department_name VARCHAR(60) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INT NOT NULL
);