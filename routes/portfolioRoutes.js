const express = require('express');
const router  = express.Router();
const Portfolio = require("../models/portfolios");
//const middleware = require("../middleware");

//GET - show all portfolio for super portfolio
router.get("/", function(req, res){
    // Get all portfolio from DB  
    Portfolio.find({}, function(err, portfolios){
        if(err){
            console.log(err);
        } else {
            res.render("portfolios/index",{portfolios: portfolios, page: 'portfolios'});
        }
    });
});

// GET - shows more info about one portfolio
router.get("/:id", function(req, res){
    //find the portfolio with provided ID
    Portfolio.findById(req.params.id, function(err, portfolio){
        if(err || !portfolio){
            console.log(err);
            //req.flash('error', 'Sorry, Portfolio does not exist!');
            return res.redirect('/portfolios');
        }
        //render show template with that portfolio
        res.render("portfolios/show", {portfolio: portfolio});
    });
});

module.exports = router;