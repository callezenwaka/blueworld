'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
  title: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  requirement: {
    type: String,
    required:true
  },
  eligibility: {
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
  },
  applications: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Application"
    }
  ]
});

module.exports = mongoose.model('Career', CareerSchema);