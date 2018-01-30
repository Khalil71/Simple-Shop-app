const { Products } = require('../models/products');
const axios = require('axios');

module.exports = {
  add: function(req) {
    var product = new Products({
      description: req.body.description,
      cost: req.body.cost,
      price: req.body.price,
      stock: req.body.stock,
    });
    return product.save();
  },

  get: function() {
    return Products.find({});
  },

  update: function(reqBody) {
    return Products.update(reqBody);
  },

  remove: function(req) {
    return Products.remove({ _id: req.body.productId });
  },

  changeCurrency: function(req) {
    url = `http://www.apilayer.net/api/live?access_key=6d36527e95f1c90087ffc2e7922c9995&currencies=${
      req.query.ISOcurrency
    }`;
    return Products.findOne({ _id: req.query.productId }).then(out => {
      return axios.get(url).then(res => {
        out.cost = out.cost * res.data.quotes[`USD${req.query.ISOcurrency}`];
        out.price = out.price * res.data.quotes[`USD${req.query.ISOcurrency}`];
        return out;
      });
    });
  },

  getTotalInfo: function() {
    return Products.find({}).then(out => {
      let totalPrice = 0;
      let totalCost = 0;
      for (let i = 0; i < out.length; i++) {
        out[i].price = out[i].stock * out[i].price;
        out[i].cost = out[i].stock * out[i].cost;
        totalPrice += out[i].price;
        totalCost += out[i].cost;
      }
      out.push({ totalPrice });
      out.push({ totalCost });
      return out;
    });
  },
};
