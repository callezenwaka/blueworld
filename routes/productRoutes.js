'use strict';
const express = require("express");
const router  = express.Router();
const Product = require("../models/products");
//const middleware = require("../middleware");

//INDEX - show all products
router.get("/", function(req, res){
    // Get all product from DB
    Product.find({}, function(err, products){
        if(err){
            console.log(err);
        } else {
            res.render("products/index",{products: products, page: 'products'});
        }
    });
});

// SHOW - shows more info about one product
router.get("/:id", function(req, res){
    //find the product with provided ID
    Product.findById(req.params.id, function(err, product){
        if(err || !product){
            console.log(err);
            req.flash('error', 'Sorry, product does not exist!');
            return res.redirect('/product/index');
        }
        //render show template with that product
        res.render("products/show", {product: product});
    });
});

module.exports = router;