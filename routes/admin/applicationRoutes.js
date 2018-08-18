'use strict';

const express = require("express");
const router  = express.Router({mergeParams: true});
const Application = require("../../models/applications");
const Career = require("../../models/careers");
//const middleware = require("../middleware");

//INDEX - show all application profiles
router.get("/", (req, res) => {
    // Get all applications from DB
    Application.find({}, function(err, applications){
        if(err){
            console.log(err);
        } else {
            res.render("admin/applications/index",{applications: applications});
        }
    });
});

// SHOW - shows more info about one application
router.get("/:id", function(req, res){
    //find the application with provided ID
    Application.findById(req.params.id,function(err, application){
        if(err || !application){
            console.log(err);
            //req.flash('error', 'Sorry, that application does not exist!');
            return res.redirect('/admin/applications');
        }
        //render show template with that application
        res.render("admin/applications/show", {application: application});
    });
});

// EDIT - shows edit form for a application
router.get("/:id/edit", function(req, res){
  //render edit template with that application
  Application.findById(req.params.id, function(err, application){
        if(err || !application){
            console.log(err);
            //req.flash('error', 'Sorry, application does not exist!');
            return res.redirect('/admin/applications');
        }
        //render show template with that application
        res.render("admin/applications/edit", {application: application});
    });
});

// PUT - updates application in the database
router.put("/:id", function(req, res){
  Application.findByIdAndUpdate(req.params.id, {$set: {status: req.body.application.status}}, function(err, application){
      if(err){
          //req.flash("error", err.message);
          res.redirect("back");
      } else {
          //req.flash("success","Successfully Updated!");
          res.redirect("/admin/applications/" + application._id);
      }
  });
});

// DELETE - removes application from the database
router.delete("/:id",function(req, res) {
    Application.findByIdAndRemove({ _id: req.params.id }, function(err, application) {
      if(err) {
          //req.flash('error', err.message);
          res.redirect('/admin/applications');
      } else {
        //req.flash('error', 'Application deleted!');
        res.redirect('/admin/applications');
      }
    })
});

module.exports = router;