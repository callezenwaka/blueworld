'use strict';
const express = require("express");
const router  = express.Router();
const Product = require("../../models/products");
//const middleware = require("../middleware");

//INDEX - show all products
router.get("/", function(req, res){
    // Get all product from DB
    Product.find({}, function(err, products){
        if(err){
            console.log(err);
        } else {
            res.render("admin/products/index",{products: products, page: 'products'});
        }
    });
});

//NEW - show form to create new product
router.get("/add", function(req, res){
    res.render("admin/products/create"); 
 });

//CREATE - add new product to DB
router.post("/", function(req, res){
  // get data from form save to DB
    Product.create(req.body.product, function(err, product){
        if(err){
            console.log(err);
        } else {
            //req.flash('success', 'Saved successful!ly!!');
            res.redirect("/admin/products/");
        }
    });
});

// SHOW - shows more info about one product
router.get("/:id", function(req, res){
    //find the product with provided ID
    Product.findById(req.params.id, function(err, product){
        if(err || !product){
            console.log(err);
            //req.flash('error', 'Sorry, product does not exist!');
            res.redirect('/admin/products');
        } else {
            //render show template with that product
            res.render('admin/products/show',{product: product});
        }
    });
});

// EDIT - shows edit form for a product
router.get("/:id/edit", function(req, res){
    //find the product with provided ID
    Product.findById(req.params.id, function(err, product){
        if(err || !product){
            console.log(err);
            //req.flash('error', 'Sorry, product does not exist!');
            return res.redirect('/admin/products');
        }
        //render show template with that product
        res.render("admin/products/edit", {product: product});
    });
});

// PUT - updates product in the database
router.put("/:id", function(req, res){
    Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, product){
        if(err){
            console.log(err)
            //req.flash("error", err.message);
            res.render("admin/products/edit");
        } else {
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/products/" + product._id);
        }
    });
});

// DELETE - removes product from the database
router.delete("/:id",function(req, res) {
    Product.findByIdAndRemove({ _id: req.params.id }, function(err, product) {
        if(err) {
            //req.flash('error', err.message);
            res.redirect('/admin/products');
        } else {
          //req.flash('error', 'Product deleted!');
          res.redirect('/admin/products');
        }
    })
});

module.exports = router;