const express = require('express');
const router = express.Router();
const Career = require("../../models/careers");
const Application = require("../../models/applications");
const Product = require("../../models/products");
const Portfolio = require("../../models/portfolios");
const User = require("../../models/users");
const Admin = require("../../models/admins");

// @get daashboard with stats
router.get('/', (req,res) => {
    res.render('admin/dashboard');
    //res.send('dashboard')
    // Promise.all([
    //     User.find(),
    //     Career.find(),
    //     Application.find(),
    //     Portfolio.find(),
    //     Product.find(),
    //     Admin.find()
    //     ])
    //     .then(results=>{
    //         //results return an array
      
    //         const [users,careers,applications,portfolios,products,admins] = results;
    //         // Assign values to local variables
    //         //res.send('dashboard')
    //         res.render('admin/dashboard',{
    //             page: 'dashboard'
    //         });

    //         // res.render('admin/dashboard',{
    //         //     users: users,
    //         //     careers: careers,
    //         //     applications: applications,
    //         //     portfolios: portfolios,
    //         //     products: products,
    //         //     admins: admins,
    //         //     page: 'dashboard'
    //         // });
    //     })
    //     .catch(err=>{
    //         console.error("Something went wrong",err);
    //     })
})

module.exports = router;