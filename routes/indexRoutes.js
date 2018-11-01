const express = require('express');
const router = express.Router();
const Product = require("../models/products");

// router.get('/', (req,res) => {
//     Product.find({}, function(err, products){
//         if(err){
//             console.log(err);
//         } else {
//             res.render('blueworld',{products: products,page: 'home'});
//             // res.render("products/index",{products: products, page: 'products'});
//         }
//     });
//     // res.render('blueworld',{page: 'home'});
// })

router.get('/', (req,res) => {
    res.render('blueworld',{page: 'home'});
})

router.get('/about', (req,res) => {
    res.render('about',{page: 'about'});
})

router.get('/contact', (req,res) => {
    res.render("contact", {page: 'contact'});
})
router.get('/score', (req,res) => {
    res.render("score", {page: 'score'});
})

module.exports = router;