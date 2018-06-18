'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the product'
  },
  price: {
    type: String,
    required: 'Kindly enter the amount of the product'
  },
  image: {
    type: String,
    required: 'Kindly upload the image of the product'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'available', 'unavailable']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Product', ProductSchema);