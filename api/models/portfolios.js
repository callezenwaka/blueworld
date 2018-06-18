'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    //unique: true
  },
  phone_number: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
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

module.exports = mongoose.model('Portfolio', PortfolioSchema);