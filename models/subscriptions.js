'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  email: {
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
      enum: ['deactivated', 'activated']
    }],
    default: ['activated']
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);