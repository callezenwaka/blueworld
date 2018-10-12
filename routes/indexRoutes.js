const express = require('express');
const router = express.Router();
const Product = require("../models/products");

router.get('/', (req,res) => {
    res.render('blueworld',{page: 'blueworld'});
})

router.get('/about', (req,res) => {
    res.render('about',{page: 'about'});
})

router.get('/contact', (req,res) => {
    res.render("contact", {page: 'contact'});
})

module.exports = router;