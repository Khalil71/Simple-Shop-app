const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  cost: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

var Products = mongoose.model('Product', ProductSchema);

module.exports = { Products };
