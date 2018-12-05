'use strict';
const express = require("express");
const router  = express.Router();
const Product = require("../models/products");
//const middleware = require("../middleware");

//INDEX - show all products
router.get("/", function(req, res){
    // Get all product from DB
    // Product.find({}, function(err, products){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.render("products/index",{products: products, page: 'products'});
    //     }
    // });
    res.render("products/product",{ page: 'products'});
});

// SHOW - shows more info about one product
router.get("/:category/:id", function(req, res){
    const id = req.params.id
    //find the product with provided ID
    Product.findById(id, function(err, product){
        if(err || !product){
            console.log(err);
            // req.flash('error', 'Sorry, product does not exist!');
            return res.redirect('/product/:category');
        }
        //render show template with that product
        res.render("products/show", {product: product});
    });
});

//INDEX - show product category
router.get("/:category", (req, res) => {
    // Get all product from DB
    var category = req.params.category
    Product.find({"category":req.params.category}, function(err, products){
        if(err){
            console.log(err);
        } else {
            res.render("products/category",{products: products,category: category, page: 'Categories'});
        }
    });
    // res.render("products/category",{page: 'Categories'});
});

module.exports = router;