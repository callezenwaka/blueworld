'use strict';
const express = require("express");
const router  = express.Router();
const Admin = require("../../models/admins");
//const middleware = require("../middleware");

//INDEX - show all admin for super admin
router.get("/", function(req, res){
    // Get all admin from DB
    Admin.find({}, function(err, admins){
        if(err){
            console.log(err);
        } else {
            res.render("admin/admins/index",{admins: admins, page: 'admin'});
        }
    });
});

//NEW - show form to create new admin
router.get("/add", function(req, res){
    res.render("admin/admins/create"); 
 });

//CREATE - add new admin to DB
router.post("/", function(req, res){
    // get data from form, create a new admin and save to DB
    Admin.create(req.body.admin, function(err, admin){
        if(err){
            console.log(err);
        } else {
            //save admin
            // admin.save();
            // req.flash('success', 'Welcome on board');
            res.redirect("/admin/admins");
        }
    });
});

// SHOW - shows more info about one admin
router.get("/:id", function(req, res){
    //find the admin with provided ID
    Admin.findById(req.params.id, function(err, admin){
        if(err || !admin){
            console.log(err);
            //req.flash('error', 'Sorry, Admin does not exist!');
            return res.redirect('/admin/admins');
        }
        console.log(admin)
        //render show template with that admin
        res.render("admin/admins/show", {admin: admin});
    });
});

// EDIT - shows edit form for a admin
router.get("/:id/edit", function(req, res){
    Admin.findById(req.params.id, function(err, admin){
        if(err || !admin){
            console.log(err);
            //req.flash('error', 'Sorry, admin does not exist!');
            return res.redirect('/admin/admins');
        }
        //render show template with that product
        res.render("admin/admins/edit", {admin: admin});
    });
});

// PUT - updates admin in the database
router.put("/:id", function(req, res){
    Admin.findByIdAndUpdate(req.params.id, {$set: req.body.admin}, function(err, admin){
        if(err){
            //req.flash("error", err.message);
            res.redirect("back");
        } else {
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/admins/" + admin._id);
        }
    });
});

// DELETE - removes campground and its comments from the database
router.delete("/:id",function(req, res) {
    Admin.findByIdAndRemove({ _id: req.params.id }, function(err, admin) {
        if(err) {
            //req.flash('error', err.message);
            res.redirect('/admin/admin');
        } else {
          //req.flash('error', 'Admin deleted!');
          res.redirect('/admin/admins');
        }
    })
});

module.exports = router;