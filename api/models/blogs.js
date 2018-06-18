'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required:true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'approved','elapsed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Blog', BlogSchema);