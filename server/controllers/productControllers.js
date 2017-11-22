const mongoose = require('mongoose').connect('mongodb://localhost:27017/ecommerce');
const ObjectId = require('mongodb').ObjectID;
const Product = require('../models/productModel');
const multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public')
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname+(Math.random() * 100).toFixed(4) + 1+'.jpg')
  }
})

let upload = multer({ storage: storage }).single('imageProduct')

let getAllProducts = (req, res) => {
  Product.find()
  .then(dataProducts => {
    res.send(dataProducts)
  })
  .catch(err => {
    res.status(500).send(err);
  })  
}

let createProduct = (req, res) => {
  console.log('MASUK', req.body);
  // upload(req,res,function(err) {})
  let input = req.body
  let inputProduct =
  {
    products_name: input.products_name,
    picture: "assets/images/service.jpg",
    prices: input.prices,
    details: input.details,
    category: input.category,
    stocks: input.stocks
  };
  //save Product
  Product.create(inputProduct)
  .then(ProductSaved => {
    res.send({
      Product: ProductSaved,
      messages : 'Input successed'
    })
  })
  .catch(err => {
    res.status(500).send('Failed to Save Products')
  })
}

let deleteProduct = (req, res) => {
  console.log(req.params.id);
  let id = {
    _id : ObjectId(req.params.id)
  }
  Product.findByIdAndRemove(id)
  .then(ProductRemoved =>{
    res.send({
      Product: ProductRemoved,
      messages: 'Remove successed'
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

let updateProduct = (req, res) => {
  console.log(req.params.id);
  let edit = req.body
  let id = {
    _id: ObjectId(req.params.id)
  }
  let Product = {
    isbn : edit.isbn,
    title: edit.title,
    author: edit.author,
    category: edit.category,
    stock: edit.stock
  }
  Product.findByIdAndUpdate(id, Product)
  .then(ProductUpdated=>{
    res.send({
      Product: ProductUpdated,
      messages: 'Update successed'
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
}
