'use strict';

const mongoose = require('mongoose'),
  Career = mongoose.model('careers');

exports.list_all_careers = function(req, res) {
  Career.find({}, function(err, career) {
    if (err)
      res.send(err);
    res.json(career);
  });
};

exports.create_a_career = function(req, res) {
  const new_career = new career(req.body);
  new_career.save(function(err, career) {
    if (err)
      res.send(err);
    res.json(career);
  });
};


exports.read_a_career = function(req, res) {
  Career.findById(req.params.careerId, function(err, career) {
    if (err)
      res.send(err);
    res.json(career);
  });
};

exports.update_a_career = function(req, res) {
  Career.findOneAndUpdate({_id: req.params.careerId}, req.body, {new: true}, function(err, career) {
    if (err)
      res.send(err);
    res.json(career);
  });
};

exports.delete_a_career = function(req, res) {
  Career.remove({
    _id: req.params.careerId
  }, function(err, career) {
    if (err)
      res.send(err);
    res.json({ message: 'career successfully deleted' });
  });
};