'use strict';
const express = require("express");
const router  = express.Router();
const Blog = require("../../models/blogs");
//const middleware = require("../middleware");

//INDEX - show all blog profiles
router.get("/", (req, res) => {
    // Get all blogs from DB
    //return res.send('Nothing to show :(')
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("blogs/index",{blogs: blogs});
        }
    });
});

//NEW - show form to create for new blog
router.get("/add", function(req, res){
  res.render("blogs/create"); 
});

//CREATE - add new blog to DB
router.post("/", function(req, res){
    // get data from form and save to DB
    console.log(req.body.blog);
    //return res.redirect('/')
  Blog.create(req.body.blog, function(err, blog){
        if(err){
            console.log(err);
        } else {
            //save blog
            //blog.save();
            console.log(blog)
            //redirect back to blog page
            res.redirect("/blogs");
        }
    });
});

// SHOW - shows more info about one blog
router.get("/:id", function(req, res){
    //find the blog with provided ID
    Blog.findById(req.params.id,function(err, blog){
        if(err || !blog){
            console.log(err);
            req.flash('error', 'Sorry, this blog does not exist!');
            return res.redirect('/blog');
        }
        //render show template with that blog
        res.render("blogs/show", {blog: blog});
    });
});

// EDIT - shows edit form for a blog
router.get("/:id/edit", function(req, res){
  //render edit template with that blog
  //_id: req.params.id;
  res.render("blogs/edit", {blog: req.blog});
});

// PUT - updates blog in the database
router.put("/:id/edit", function(req, res){
  const newData = {
                    title: title,
                    status: status,
                    Created_date: Created_date
                  };
  Blog.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, blog){
      if(err){
          req.flash("error", err.message);
          res.redirect("back");
      } else {
          req.flash("success","Successfully Updated!");
          res.redirect("/blogs/" + blog._id);
      }
  });
});

// DELETE - removes blog from the database
router.delete("/:id",function(req, res) {
  Blog.findByIdAndRemove({ _id: req.params.id }, function(err, blog) {
      if(err) {
          req.flash('error', err.message);
          res.redirect('/');
      } else {
        req.flash('error', 'Blog deleted!');
        res.redirect('/blogs');
      }
    })
});

module.exports = router;