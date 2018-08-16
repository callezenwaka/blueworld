'use strict';
const express = require("express");
const router  = express.Router();
const Career = require("../models/careers");
const Application = require("../models/applications");
//const middleware = require("../middleware");

//INDEX - show all career profiles
router.get("/", (req, res) => {return res.send('Feeling good')
    // Get all careers from DB
    // Career.find({}, function(err, careers){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.render("careers/index",{careers: careers, page: 'careers'});
    //     }
    // });
});

// SHOW - shows more info about one Career
router.get("/:id", function(req, res){
    //find the Career with provided ID
    Career.findById(req.params.id,function(err, career){
        if(err || !career){
            console.log(err);
            req.flash('error', 'Sorry, that Career does not exist!');
            return res.redirect('/careers');
        }
        //render show template with that career
        res.render("careers/show", {career: career});
    });
});

module.exports = router;