'use strict';

const express = require("express");
const router  = express.Router();
const Subscription = require("../../models/subscriptions");
//const middleware = require("../middleware");

//INDEX - show all subscriptions details
router.get("/", (req, res) => {
    // Get all subscriptions from DB
    Subscription.find({}, function(err, subscriptions){
        if(err){
            console.log(err);
        } else {
            console.log(subscriptions);
            res.render("admin/subscriptions/index",{subscriptions: subscriptions, page: 'subscriptions'});
        }
    });
});

module.exports = router;