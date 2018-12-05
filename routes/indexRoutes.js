const express = require('express');
const router = express.Router();
const Product = require("../models/products");
const Contact = require("../models/contacts");
const Subscription = require("../models/subscriptions");
var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//GET - Show All New and Old Products in Home Page
router.get('/', (req,res) => {
    Promise.all([
        Product.find({prod: 'newProduct'}),
        Product.find({prod: 'oldProduct'}).limit(10),
        Product.find({prod: 'oldProduct'}).skip(10),
    ])
    .then(results=>{
        //results return an array
        const [new_product,old_product,all_product] = results;
        res.render('blueworld',{
            new_products: new_product,
            old_products: old_product,
            all_products: all_product,
            page: 'Home'
        });
    })
    .catch(err=>{
        console.error("Something went wrong",err);
    })
})

//GET - Show About Page
router.get('/about', (req,res) => {
    res.render('about',{page: 'about'});
})

//GET - Show Contact Page
router.get('/contact', (req,res) => {
    res.render("contact", {page: 'contact'});
})

//POST - Show Contact Page
router.post('/contact', (req,res) => {
    name = req.body.contact.full_name
    sender = req.body.contact.email
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
        <li>Name: ${req.body.contact.full_name}</li>
        <li>Subject: ${req.body.contact.title}</li>
        <li>Email: ${req.body.contact.email}</li>
        <li>Phone: ${req.body.contact.phone_number}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.contact.message}</p>
    `;

    var data = {
        from: req.body.contact.full_name + ' ' + req.body.contact.email,
        to: req.body.contact.email,
        subject: 'Contact Request',
        text: 'Testing some Mailgun awesomeness!',
        html: output // html body
    };
    
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
        console.log(body);
        Contact.create(req.body.contact, function(err, contact){
            if(err) {
                console.log(err);
            } else {  
                res.redirect('/contact/');
            }
        });   
    });
});

//GET - Show Search Page
router.get('/search', (req,res) => {
    var noMatch = null;
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // Get all products from DB
        Product.find({name: regex}, function(err, products){
            if(err){
                console.log(err);
            } else {
                if(products.length < 1) {
                    noMatch = "No products match that query, please try again.";
                }
                res.render("products/index",{products:products, noMatch: noMatch});
            }
        });
    } else {
        res.render('blueworld',{page: 'home'});
    }
})

//POST - Post Subscription to Database
router.post('/', (req,res) => {
    Subscription.create(req.body, function(err, subscription){
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
})

//Expression for Fetching Search Query
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;