'use strict';

const express = require("express");
const router  = express.Router({mergeParams: true});
const Application = require("../models/applications");
const Career = require("../models/careers");
//const middleware = require("../middleware");

//Create new application - show form to apply for new career
router.get("/apply", function(req, res){
    //find the career with provided ID
    Career.findById(req.params.id, function(err, career){
        if(err || !career){
            console.log(err);
            //req.flash('error', 'Sorry, Career does not exist!');
            return res.redirect('back');
        } else {
            res.render("applications/create", {career: career});
       }
        //render show template with that career
        //res.render("applications/create", {career: career});
    })
});

//Send application deails to DB
router.post("/", function(req, res){
  // get data from form and add to careers array
  Career.findById(req.params.id, function(err, career){
        if(err){
            console.log(err);
            res.redirect("/career");
        } else {
        Application.create(req.body.application, function(err, application){
            if(err){
                console.log(err);
            } else {
                //add user email and id to application
                // application.user.id = req.user._id;
                // application.user.email = req.user.email;
                application.user.id = '5b0974ae1ffd3e1a4658669a';
                application.user.email = 'call@gmail.com';
                application.career.id = req.params.id;
                application.career.title = career.title;
                //save application
                application.save();
                career.applications.push(application);
                career.save();
                console.log(application);
                //req.flash('success', 'Application created Successfully!!');
                res.redirect('/careers/' + career._id);
            }
        });
        }
    });
    // Create a new application and save to DB
    // Application.create(application, function(err, newApplication){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         //redirect back to Career page
    //         console.log(newApplication);
    //         res.redirect("/careers");
    //     }
    // });
});

// SHOW - shows more info about one application
router.get("/applications/:applicationId", function(req, res){
    //find the application with provided ID
    Application.findById(req.params.applicationId), function(err, application){
        if(err || !application){
            console.log(err);
            req.flash('error', 'Sorry, application does not exist!');
            return res.redirect('/careers');
        } 
        //render show template with that application
        res.render("applications/show", {application: application});
    };
});

module.exports = router;