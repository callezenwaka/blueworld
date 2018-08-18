'use strict';
const express = require("express");
const router  = express.Router();
const User = require("../../models/users");
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

//INDEX - show all users
router.get("/", function(req, res){
    // Get all user from DB
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render("admin/users/index",{users: users});
        }
    });
});

//NEW - show form to create for new user
router.get("/add", function(req, res){
    res.render("admin/users/create"); 
  });
  
//CREATE - add new user to DB
router.post("/", upload.single('image'), (req, res) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
        if(err) {
          //req.flash('error', err.message);
          return res.redirect('back');
        }
        // add cloudinary url for the image to the user object under image property
        req.body.user.image = result.secure_url;
        // add image's public_id to user object
        req.body.user.imageId = result.public_id;
        // get data from form and save to DB
        User.create(req.body.user, function(err, user){
            if(err){
                  console.log(err);
            } else {
                //user.save()
                res.redirect('/admin/users/');
            }
        });
    });
});

// SHOW - shows more info about one user
router.get("/:id", function(req, res){
    //find the user with provided ID
    User.findById(req.params.id).populate('applications').exec(function(err, user){
        if(err || !user){
            console.log(err);
            //req.flash('error', 'Sorry, User does not exist!');
            return res.redirect('/admin/users');
        }
        //render show template with that user
        res.render("admin/users/show", {user: user});
    });
});

// EDIT - shows edit form for a user
router.get("/:id/edit", function(req, res){
  //render edit template with that user
  User.findById(req.params.id, function(err, user){
        if(err || !user){
            console.log(err);
            //req.flash('error', 'Sorry, user does not exist!');
            return res.redirect('/admin/users');
        }
        //render show template with that user
        res.render("admin/users/edit", {user: user});
    });
});

// PUT - updates user in the database
router.put("/:id", upload.single('image'), function(req, res){
    User.findById(req.params.id, async (err, user) => {
        if(err){
            //req.flash("error", err.message);
            res.redirect("/admin/users");
        } else {
            if (req.file) {
                try {
                    await cloudinary.v2.uploader.destroy(user.imageId);
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                    user.imageId = result.public_id;
                    user.image = result.secure_url;
                } catch(err) {
                    console.log(err)
                    // req.flash("error", err.message);
                    return res.redirect("back");
                }
            }
            user.name = req.body.user.name;
            user.description = req.body.user.description;
            user.price = req.body.user.price;
            console.log(user)
            user.save();
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/users/" + user._id);
        }
    });
});

// DELETE - removes user from the database
router.delete("/:id",function(req, res) {
    User.findById(req.params.id, async (err, user) => {
        try {
            await cloudinary.v2.uploader.destroy(user.imageId);
            await user.remove();
            // req.flash('success', 'User deleted successfully!');
            res.redirect('back');
        } catch(err) {
            console.log(err)
        }
        res.redirect('/admin/users');
    })
});

module.exports = router;