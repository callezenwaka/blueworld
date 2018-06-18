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
    Promise.all([
        User.find(),
        User.count(),
        Career.find(),
        Career.count(),
        Application.find(),
        Application.count(),
        Portfolio.find(),
        Portfolio.count(),
        Product.find(),
        Product.count(),
        Admin.find(),
        Admin.count()
      ])
        .then(results=>{
            //results return an array
      
            const [users,usersTotal,careers,careersTotal,applications,applicationsTotal,portfolios,portfoliosTotal,products,productsTotal,admins,adminsTotal] = results;
            // Assign values to local variables
            res.app.locals.usersTotal = usersTotal
            res.app.locals.careersTotal = careersTotal
            res.app.locals.applicationsTotal = applicationsTotal
            res.app.locals.portfoliosTotal = portfoliosTotal
            res.app.locals.productsTotal = productsTotal
            res.app.locals.adminsTotal = adminsTotal

            res.render('admin/dashboard',{
                users: users,
                careers: careers,
                applications: applications,
                portfolios: portfolios,
                products: products,
                admins: admins,
                page: 'dashboard'
            });
        })
        .catch(err=>{
            console.error("Something went wrong",err);
        })
})

module.exports = router;