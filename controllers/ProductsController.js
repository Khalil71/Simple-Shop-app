const express = require('express');
const validateCurrencyCode = require('validate-currency-code');
const {
  add,
  get,
  update,
  remove,
  changeCurrency,
  getTotalInfo,
} = require('../services/ProductsService');

module.exports = {
  addProducts: function(req, res) {
    if (!req.body.description) {
      return res.status(403).send({ error: 'Please enter valid description' });
    }
    if (!req.body.cost) {
      return res.status(403).send({ error: 'Please enter valid cost' });
    }
    if (!req.body.price) {
      return res.status(403).send({ error: 'Please enter valid price' });
    }
    if (!req.body.stock) {
      return res.status(403).send({ error: 'Please enter valid stock' });
    }
    add(req)
      .then(data => res.status(200).send({ data }))
      .catch(e => res.status(403).send(e));
  },
  getProducts: function(req, res) {
    get(req)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(403).send(e));
  },
  updateProducts: function(req, res) {
    if (!req.body.productId) {
      return res.status(403).send({ error: 'Please enter valid productId' });
    }
    var reqBody = {};
    if (req.body.description) {
      reqBody.description = req.body.description;
    }
    if (req.body.cost) {
      reqBody.cost = req.body.cost;
    }
    if (req.body.price) {
      reqBody.price = req.body.price;
    }
    if (req.body.stock) {
      reqBody.stock = req.body.stock;
    }
    update(reqBody)
      .then(data =>
        res.status(200).send({ message: 'Product has been updated' }),
      )
      .catch(e => res.status(403).send(e));
  },
  deleteProducts: function(req, res) {
    if (!req.body.productId) {
      return res.status(403).send({ error: 'Please enter valid productId' });
    }
    remove(req)
      .then(data =>
        res.status(200).send({ message: 'Product has been removed' }),
      )
      .catch(e => res.status(403).send(e));
  },
  viewInDiffrentCurreny: function(req, res) {
    if (!req.query.ISOcurrency) {
      return res.status(403).send({ error: 'Please enter ISOcurrency' });
    }
    if (!req.query.productId) {
      return res.status(403).send({ error: 'Please enter valid productId' });
    }
    if (!validateCurrencyCode(req.query.ISOcurrency)) {
      return res.status(403).send({ error: 'Please enter valid ISOcurrency' });
    }
    changeCurrency(req)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(403).send(e));
  },
  productsFullInfo: function(req, res) {
    getTotalInfo(req)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(403).send(e));
  },
};
