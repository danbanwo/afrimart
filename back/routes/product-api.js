const express = require('express');
const productApi = express.Router();
const Product = require('../models').Product;

const getAllProducts = (req, res) => {
  Product.findAll()
  .then((products) => {
    res.send(products)
  })
}

const getOneProduct = (req, res) => {
  let id = req.params.id
  Product.findById(id)
  .then((products) => {
    res.send(products)
  })
}

const createProduct = (req, res) => {
  let data = req.body
  Product.create({
    item: data.item,
    description: data.description,
    price: data.price,
    quantity: data.quantity,
    image_big: data.image_big,
    image_small: data.image_small
  })
  .then((product) => {
    res.send('Product was succuessfully added to the database.')
  })
}


productApi.route('/api/product')
.get(getAllProducts)
.post(createProduct)

productApi.route('/api/product/:id')
.get(getOneProduct)



module.exports = productApi;
