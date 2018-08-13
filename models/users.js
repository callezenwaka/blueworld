'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required:true
  },
  last_name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  image: {
    type: String,
  },
  imageId: String,
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'active','deactivated']
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

module.exports = mongoose.model('User', UserSchema);