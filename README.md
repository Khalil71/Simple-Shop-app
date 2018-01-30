#Simple CRUD project (Shop)

## Getting Started

### Prerequisites

What things you need to install

```
node.js
```

```
postman
```

### Installing

install dependencies

```
$ npm i
```

To run the server

```
$ npm run start
```

To run the server on watch mode

```
$ npm run mon
```

## APIs

### get all products

GET http://localhost:4000/products/getAll

### add a product

#### BODY: (description: required) (cost: required) (price: required) (stock: required)

POST http://localhost:4000/products/add

### update a product

#### BODY: (productId: required) (description: optional) (cost: optional) (price: optional) (stock: optional)

PATCH http://localhost:4000/products/update

### delete a products

#### BODY: (productId: required)

DELETE http://localhost:4000/products/delete

### get a product with a diffrent currency

#### params: (productId: required) (ISOcurrency: required)(ISO format required)

GET http://localhost:4000/products/currency

### get total price and cost or each product as well as the total sum of all

GET http://localhost:4000/products/fullInfo

## Author

* **Mohamed Hegab** - _Github link_ - [Khalil71](https://github.com/Khalil71)

## License

This project is licensed under the MIT License
