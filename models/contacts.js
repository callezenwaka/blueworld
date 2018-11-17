'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  full_name: {
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
  title: {
    type: String,
    required: true
  },
  message: {
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
      enum: ['unread', 'read']
    }],
    default: ['unread']
  }
});

module.exports = mongoose.model('Contact', ContactSchema);