'use strict';
const express = require("express");
const router  = express.Router();
const Career = require("../../models/careers");
const Application = require("../../models/applications");
//const middleware = require("../middleware");

//INDEX - show all career profiles
router.get("/", (req, res) => {
    // Get all careers from DB;
    Career.find({}, function(err, careers){
        if(err){
            console.log(err);
        } else {
            res.render("admin/careers/index",{careers: careers});
        }
    });
});

//NEW - show form to create for new career
router.get("/add", function(req, res){
    res.render("admin/careers/create"); 
});

//CREATE - add new career to DB
router.post("/", function(req, res){
  // get data from form and save to DB
    Career.create(req.body.career, function(err, career){
        if(err){
            console.log(err);
        } else {
            //save career
            //career.save();
            console.log(career)
            //redirect back to Career page
            res.redirect("/admin/careers/");
        }
    });
});

// SHOW - shows more info about one Career
router.get("/:id", function(req, res){
    //find the Career with provided ID
    Career.findById(req.params.id).populate('applications').exec(function(err, career){
        if(err || !career){
            console.log(err);
            //req.flash('error', 'Sorry, that Career does not exist!');
            res.redirect('/admin/careers');
        } else {
            //render show template with that career
            res.render("admin/careers/show", {career: career});
        }
    });
});

// EDIT - shows edit form for a career
router.get("/:id/edit", function(req, res){
    //render edit template with that career
        Career.findById(req.params.id, function(err, career){
            if(err || !career){
                console.log(err);
                //req.flash('error', 'Sorry, career does not exist!');
                return res.redirect('/admin/careers');
            }
            //render show template with that career
            res.render("admin/careers/edit", {
                career: career,
                layout: 'dashboard.handlebars',
                title: 'Add-Career'
            });
        });
  });

// PUT - updates career in the database
router.put("/:id", function(req, res){
  const newData = {
                    title: req.body.career.title,
                    description: req.body.career.description,
                    requirement: req.body.career.requirement,
                    eligibility: req.body.career.eligibility,
                    status: req.body.career.status
                  };
  Career.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, career){
      if(err){
          //req.flash("error", err.message);
          res.redirect("back");
      } else {
          //req.flash("success","Successfully Updated!");
          res.redirect("/admin/careers/" + career._id);
      }
  });
});

// DELETE - removes career from the database
router.delete("/:id",function(req, res) {
  Career.findByIdAndRemove({ _id: req.params.id }, function(err, career) {
      if(err) {
          //req.flash('error', err.message);
          res.redirect('/admin/careers');
      } else {
        //req.flash('error', 'Career deleted!');
        res.redirect('/admin/careers');
      }
    })
});

module.exports = router;