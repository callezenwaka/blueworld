'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    first_name: {
        type: String,
        required: 'Kindly enter your name',
        required: true
    },
    last_name: {
        type: String,
        required: 'Kindly enter your name',
        required: true
    },
    email: {
        type: String,
        required: 'Kindly enter your email',
        unique: true
    },
    password: {
        type: String,
        required: 'Kindly enter your password'
    },
    image: {
        type: String,
        required: 'Kindly upload your image'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    status: {
        type: [{
        type: String,
        enum: ['pending', 'staff']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Admin', AdminSchema);