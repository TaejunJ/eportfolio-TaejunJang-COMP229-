/*
Name: Taejun Jang
Student Number: 301228129
File: index.js
Date: Sep 28, 2022
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Home'});
});

/* GET home page. */
router.get('/homePage', function(req, res, next) {
  res.render('homePage', { title: 'Home'});
});

/* GET About Me page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* USE Contact Me page. */
router.use('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact'});
});

module.exports = router;
