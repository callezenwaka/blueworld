'use strict';
const express = require("express");
const router  = express.Router();
const Portfolio = require("../../models/portfolios");
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
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//INDEX - show all portfolio for super portfolio
router.get("/", function(req, res){
    // Get all portfolio from DB  
    Portfolio.find({}, function(err, portfolios){
        if(err){
            console.log(err);
        } else {
            res.render("admin/portfolios/index",{portfolios: portfolios, page: 'portfolios'});
        }
    });
});

//NEW - show form to create new portfolio
router.get("/add", function(req, res){
    res.render("admin/portfolios/create"); 
 });

//CREATE - add new portfolio to DB
router.post("/", upload.single('image'), function(req, res){
  cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    if(err) {
      //req.flash('error', err.message);
      console.log(err)
      return res.redirect('back');
    }
    // add cloudinary url for the image to the portfolio object under image property
    req.body.portfolio.image = result.secure_url;
    // add image's public_id to portfolio object
    req.body.portfolio.imageId = result.public_id;
    // get data from form and save to DB
    console.log(req.body.portfolio)
    Portfolio.create(req.body.portfolio, function(err, portfolio){
      if(err){
          console.log(err);
      } else {
        //portfolio.save()
        // res.redirect('/admin/portfolios/');
        res.send('done');
      }
    });
  });
});

// SHOW - shows more info about one portfolio
router.get("/:id", function(req, res){
    //find the portfolio with provided ID
    Portfolio.findById(req.params.id, function(err, portfolio){
        if(err || !portfolio){
            console.log(err);
            //req.flash('error', 'Sorry, Portfolio does not exist!');
            return res.redirect('/admin/portfolios');
        }
        //render show template with that portfolio
        res.render("admin/portfolios/show", {portfolio: portfolio});
    });
});

// // EDIT - shows edit form for a portfolio
router.get("/:id/edit", function(req, res){
    //render edit template with that portfolio
    Portfolio.findById(req.params.id, function(err, portfolio){
          if(err || !portfolio){
              console.log(err);
              //req.flash('error', 'Sorry, portfolio does not exist!');
              return res.redirect('/admin/careers');
          }
          //render show template with that portfolio
          res.render("admin/portfolios/edit", {portfolio: portfolio});
      });
  });

// PUT - updates portfolio in the database
router.put("/:id", upload.single('image'), function(req, res){
    Portfolio.findById(req.params.id, async (err, portfolio) => {
        if(err){
            //req.flash("error", err.message);
            res.redirect("back");
        } else {
          if (req.file) {
            try {
              await cloudinary.v2.uploader.destroy(portfolio.imageId);
              var result = await cloudinary.v2.uploader.upload(req.file.path);
              portfolio.imageId = result.public_id;
              portfolio.image = result.secure_url;
            } catch(err) {
              console.log(err)
              // req.flash("error", err.message);
              return res.redirect("back");
            }
          }
          portfolio.first_name = req.body.portfolio.first_name;
          portfolio.last_name = req.body.portfolio.last_name;
          portfolio.email = req.body.portfolio.email;
          portfolio.phone_number = req.body.portfolio.phone_number;
          portfolio.position = req.body.portfolio.position;
          portfolio.profile = req.body.portfolio.profile;
          console.log(portfolio)
          portfolio.save();
          //req.flash("success","Successfully Updated!");
          res.redirect("/admin/portfolios/" + portfolio._id);
        }
    });
});

// DELETE - removes portfolio from the database
router.delete("/:id",function(req, res) {
    Portfolio.findById(req.params.id , async (err, portfolio) => {
      try {
        await cloudinary.v2.uploader.destroy(portfolio.imageId);
        await portfolio.remove();
        // req.flash('success', 'Campground deleted successfully!');
        res.redirect('back');
      } catch(err) {
        console.log(err)
      }
      //req.flash('error', 'Portfolios deleted!');
      res.redirect('/admin/portfolios');
        
    })
});

module.exports = router;