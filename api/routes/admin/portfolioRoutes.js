'use strict';
const express = require("express");
const router  = express.Router();
const Portfolio = require("../../models/portfolios");
//const middleware = require("../middleware");

//INDEX - show all portfolio for super portfolio
router.get("/", function(req, res){
    // Get all portfolio from DB  
    Portfolio.find({}, function(err, portfolios){
        if(err){
            console.log(err);
        } else {
            res.render("admin/portfolios/index",{portfolios: portfolios, page: 'portfolios'});
        }
    });
});

//NEW - show form to create new portfolio
router.get("/add", function(req, res){
    res.render("admin/portfolios/create"); 
 });

//CREATE - add new portfolio to DB
router.post("/", function(req, res){
  // get data from form and save to DB
  console.log(req.body.portfolio.image)
    Portfolio.create(req.body.portfolio, function(err, portfolio){
        if(err){
            console.log(err);
        } else {
            //save portfolio
            //req.flash('success', 'Saved successful!ly!!');
            res.redirect("/admin/portfolios/");
        }
    });
});

// SHOW - shows more info about one portfolio
router.get("/:id", function(req, res){
    //find the portfolio with provided ID
    Portfolio.findById(req.params.id, function(err, portfolio){
        if(err || !portfolio){
            console.log(err);
            //req.flash('error', 'Sorry, Portfolio does not exist!');
            return res.redirect('/admin/portfolios');
        }
        //render show template with that portfolio
        res.render("admin/portfolios/show", {portfolio: portfolio});
    });
});

// // EDIT - shows edit form for a portfolio
router.get("/:id/edit", function(req, res){
    //render edit template with that portfolio
    Portfolio.findById(req.params.id, function(err, portfolio){
          if(err || !portfolio){
              console.log(err);
              //req.flash('error', 'Sorry, portfolio does not exist!');
              return res.redirect('/admin/careers');
          }
          //render show template with that portfolio
          res.render("admin/portfolios/edit", {portfolio: portfolio});
      });
  });

// PUT - updates portfolio in the database
router.put("/:id", function(req, res){
    Portfolio.findByIdAndUpdate(req.params.id, {$set: req.body.portfolio}, function(err, portfolio){
        if(err){
            //req.flash("error", err.message);
            res.redirect("back");
        } else {
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/portfolios/" + portfolio._id);
        }
    });
});

// DELETE - removes portfolio from the database
router.delete("/:id",function(req, res) {
    Portfolio.findByIdAndRemove({ _id: req.params.id }, function(err, portfolio) {
        if(err) {
            //req.flash('error', err.message);
            res.redirect('/admin/portfolios');
        } else {
          //req.flash('error', 'Portfolios deleted!');
          res.redirect('/admin/portfolios');
        }
    })
});

module.exports = router;