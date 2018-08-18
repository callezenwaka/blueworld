'use strict';
const express = require("express");
const router  = express.Router();
const Admin = require("../../models/admins");
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

//INDEX - show all admin for super admin
router.get("/", function(req, res){
    // Get all admin from DB
    Admin.find({}, function(err, admins){
        if(err){
            console.log(err);
        } else {
            res.render("admin/admins/index",{admins: admins, page: 'admin'});
        }
    });
});

//NEW - show form to create new admin
router.get("/add", function(req, res){
    res.render("admin/admins/create"); 
 });

//CREATE - add new admin to DB
router.post("/", upload.single('image'), function(req, res){
    // get data from form, create a new admin and save to DB
    cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
        if(err) {
          //req.flash('error', err.message);
          return res.redirect('back');
        }
        // add cloudinary url for the image to the admin object under image property
        req.body.admin.image = result.secure_url;
        // add image's public_id to admin object
        req.body.admin.imageId = result.public_id;
        // get data from form and save to DB
        Admin.create(req.body.admin, function(err, admin){
            if(err){
                console.log(err);
             } else {
                //admin.save()
                res.redirect('/admin/admins');
            }
        });
    });
});

// SHOW - shows more info about one admin
router.get("/:id", function(req, res){
    //find the admin with provided ID
    Admin.findById(req.params.id, function(err, admin){
        if(err || !admin){
            console.log(err);
            //req.flash('error', 'Sorry, Admin does not exist!');
            return res.redirect('/admin/admins');
        }
        console.log(admin)
        //render show template with that admin
        res.render("admin/admins/show", {admin: admin});
    });
});

// EDIT - shows edit form for a admin
router.get("/:id/edit", function(req, res){
    Admin.findById(req.params.id, function(err, admin){
        if(err || !admin){
            console.log(err);
            //req.flash('error', 'Sorry, admin does not exist!');
            return res.redirect('/admin/admins');
        }
        //render show template with that product
        res.render("admin/admins/edit", {admin: admin});
    });
});

// PUT - updates admin in the database
router.put("/:id", upload.single('image'), function(req, res){
    Admin.findById(req.params.id, async (err, admin) => {
        if(err){
            //req.flash("error", err.message);
            console.log(err);
            res.redirect("back");
        } else {
            if (req.file) {
                try {
                    await cloudinary.v2.uploader.destroy(admin.imageId);
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                    admin.imageId = result.public_id;
                    admin.image = result.secure_url;
                } catch(err) {
                    console.log(err)
                    // req.flash("error", err.message);
                    return res.redirect("back");
                }
            }
            admin.first_name = req.body.admin.first_name;
            admin.last_name = req.body.admin.last_name;
            admin.email = req.body.admin.email;
            console.log(admin)
            admin.save();
            //req.flash("success","Successfully Updated!");
            res.redirect("/admin/admins/" + admin._id)
        }
    });
});

// DELETE - removes campground and its comments from the database
router.delete("/:id",function(req, res) {
    Admin.findById(req.params.id , async (err, admin) => {
        try {
            await cloudinary.v2.uploader.destroy(admin.imageId);
            await admin.remove();
            // req.flash('success', 'Admin deleted successfully!');
            res.redirect('back');
        } catch(err) {
            console.log(err)
        }
        res.redirect('/admin/admins');
    })
});

module.exports = router;