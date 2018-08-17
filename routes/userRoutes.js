'use strict';
const express = require("express");
const router  = express.Router();
const User = require("../models/users");
//const middleware = require("../middleware");

//NEW - show form to create for new user
router.get("/add", function(req, res){
    res.render("users/create"); 
  });
  
//CREATE - add new user to DB
router.post("/", (req, res) => {
    // get data from form and save to DB
    console.log(req.body.user)
    User.create(req.body.user, (err, user) => {
        if(err){
            return console.log(err);
        } else {
            //save user
            //user.save();
            console.log(user)
            //redirect back to user page
            res.redirect('/users/' + user._id);
        }
    });
});

// SHOW - shows more info about one user
router.get("/:id", function(req, res){
    //find the user with provided ID
    User.findById(req.params.id, function(err, user){
        if(err || !user){
            console.log(err);
            req.flash('error', 'Sorry, User does not exist!');
            return res.redirect('/');
        }
        //render show template with that user
        res.render("users/show", {user: user});
    });
});

// EDIT - shows edit form for a user
router.get("/:id/edit", function(req, res){
  //render edit template with that user
  res.render("users/edit", {user: req.user});
});

// PUT - updates user in the database
router.put("/:id", function(req, res){
    User.findByIdAndUpdate(req.params.id, {$set: req.body.user}, function(err, user){
        if(err){
            //req.flash("error", err.message);
            res.redirect("back");
        } else {
            //req.flash("success","Successfully Updated!");
            res.redirect("/users/" + user._id);
        }
    });
});

module.exports = router;