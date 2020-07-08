const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureGuest } = require('../helper/authHelper');


router.get('/',ensureGuest, (req, res) => {
  const title = "WelcomePage";
  // res.send("DipakGhuge")
  res.render('index/welcome', {
    title: title
  });
})
router.get('/dashboard', ensureAuthenticated,(req, res) => {
  res.render("index/dashboard")
})
router.get('/about', (req, res) => {
  res.render("index/about")
})

module.exports = router