'use strict';
const express = require("express");
const router  = express.Router();
const User = require("../../models/users");
//const middleware = require("../middleware");

//INDEX - show all users
router.get("/", function(req, res){
    // Get all user from DB
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render("admin/users/index",{users: users});
        }
    });
});

//NEW - show form to create for new user
router.get("/add", function(req, res){
    res.render("admin/users/create"); 
  });
  
//CREATE - add new user to DB
router.post("/", (req, res) => {
    // get data from form and save to DB
    User.create(req.body.user, (err, user) => {
        if(err){
            return console.log(err);
        } else {
            //save user
            //user.save();
            console.log(user)
            //redirect back to user page
            res.redirect('/admin/users');
        }
    });
});

// SHOW - shows more info about one user
router.get("/:id", function(req, res){
    //find the user with provided ID
    User.findById(req.params.id).populate('applications').exec(function(err, user){
        if(err || !user){
            console.log(err);
            //req.flash('error', 'Sorry, User does not exist!');
            return res.redirect('/admin/users');
        }
        //render show template with that user
        res.render("admin/users/show", {user: user});
    });
});

// EDIT - shows edit form for a user
router.get("/:id/edit", function(req, res){
  //render edit template with that user
  User.findById(req.params.id, function(err, user){
        if(err || !user){
            console.log(err);
            //req.flash('error', 'Sorry, user does not exist!');
            return res.redirect('/admin/users');
        }
        //render show template with that user
        res.render("admin/users/edit", {user: user});
    });
});

// PUT - updates user in the database
router.put("/:id", function(req, res){
    const newData = {status: req.body.user.status};
    User.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, user){
        if(err){
            //req.flash("error", err.message);
            res.redirect("/admin/users");
        } else {
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/users/" + user._id);
        }
    });
});

// DELETE - removes user from the database
router.delete("/:id",function(req, res) {
    User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
        if(err) {
            //req.flash('error', err.message);
            res.redirect('/admin/users');
        } else {
          //req.flash('error', 'User deleted!');
          res.redirect('/admin/users');
        }
    })
});

module.exports = router;