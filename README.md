# ecommerce
USING CLIENT SERVER

## REST API

List of user routes:

| Route               | HTTP            | Description     |
|:--------------------|:----------------|:----------------|
| `/`                 |GET            | Show all the products|
| `/products`        |POST           | Create a product|
| `/products/:id`    |DELETE         | Delete a product|
| `/products/:id`    |PUT            | Update a product with new info|
| `/transactions`    |POST           | Create a transaction with input member and some products|

## Usage
with only npm :
```
$ git clone

for SERVER
$ cd server
$ npm install
$ npm run dev

for CLIENT
$ cd client
$ live-server (using npm for installing liver-server global )
```
link : 

http://www.smartshopp.ga (user)

http://www.smartshopp.ga/product.html (upload & admin) username = admin || password = admin