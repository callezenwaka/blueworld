'use strict';
const express = require("express");
const router  = express.Router();
const Product = require("../../models/products");
//const middleware = require("../middleware");

const cloudinary = require('cloudinary');
const multer = require('multer');
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter})

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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
router.post("/", upload.single('image'), function(req, res){
    cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
        if(err) {
          //req.flash('error', err.message);
          return res.redirect('back');
        }
        // add cloudinary url for the image to the product object under image property
        req.body.product.image = result.secure_url;
        // add image's public_id to product object
        req.body.product.imageId = result.public_id;
        // get data from form and save to DB
        Product.create(req.body.product, function(err, product){
            if(err){
                  console.log(err);
            } else {
                //product.save()
                res.redirect('/admin/products/');
            }
        });
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
router.put("/:id",  upload.single('image'), function(req, res){
    Product.findById(req.params.id, async (err, product) => {
        if(err){
            console.log(err)
            //req.flash("error", err.message);
            res.render("admin/products/edit");
        } else {
            if (req.file) {
                try {
                    await cloudinary.v2.uploader.destroy(product.imageId);
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                    product.imageId = result.public_id;
                    product.image = result.secure_url;
                } catch(err) {
                    console.log(err)
                    // req.flash("error", err.message);
                    return res.redirect("back");
                }
            }
            product.name = req.body.product.name;
            product.description = req.body.product.description;
            product.price = req.body.product.price;
            console.log(product)
            product.save();
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/products/" + product._id);
        }
    });
});

// DELETE - removes product from the database
router.delete("/:id",function(req, res) {
    Product.findById(req.params.id, async (err, product) => {
        try {
            await cloudinary.v2.uploader.destroy(product.imageId);
            await product.remove();
            // req.flash('success', 'Product deleted successfully!');
            res.redirect('back');
        } catch(err) {
            console.log(err)
        }
        res.redirect('/admin/products');
    })
});

module.exports = router;