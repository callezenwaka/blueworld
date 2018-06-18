'use strict';

const mongoose = require('mongoose'),
  Portfolio = mongoose.model('portfolios');

exports.list_all_portfolios = function(req, res) {
  Portfolio.find({}, function(err, portfolio) {
    if (err)
      res.send(err);
    res.json(portfolio);
  });
};

exports.create_a_portfolio = function(req, res) {
  const new_portfolio = new portfolio(req.body);
  new_portfolio.save(function(err, portfolio) {
    if (err)
      res.send(err);
    res.json(portfolio);
  });
};

exports.read_a_portfolio = function(req, res) {
  Portfolio.findById(req.params.portfolioId, function(err, portfolio) {
    if (err)
      res.send(err);
    res.json(portfolio);
  });
};


exports.update_a_portfolio = function(req, res) {
  Portfolio.findOneAndUpdate({_id: req.params.portfolioId}, req.body, {new: true}, function(err, portfolio) {
    if (err)
      res.send(err);
    res.json(portfolio);
  });
};

exports.delete_a_portfolio = function(req, res) {
  Portfolio.remove({
    _id: req.params.portfolioId
  }, function(err, portfolio) {
    if (err)
      res.send(err);
    res.json({ message: 'portfolio successfully deleted' });
  });
};