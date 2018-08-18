const express = require('express');
const router = express.Router();
const Product = require("../models/products");

// router.get('/', (req,res) => {
//     Product.find({}, function(err, products){
//         if(err){
//             console.log(err);
//         } else {
//             res.render('index',{products: products,page: 'home'});
//         }
//     });
//     // res.render('index',{products: products,page: 'home'});
// })
router.get('/', (req,res) => {
    res.render('home',{page: 'home'});
})

router.get('/about', (req,res) => {
    res.render('about',{page: 'about'});
})

router.get('/contact', (req,res) => {
    res.render("contact", {page: 'contact'});
})

module.exports = router;