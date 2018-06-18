'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
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
    course: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    resume: {
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
        enum: ['pending', 'accepted', 'rejected']
    }],
    default: ['pending']
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        email: String
    },
    career: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Career"
        },
        title: String
    }
});

module.exports = mongoose.model('Application', ApplicationSchema);