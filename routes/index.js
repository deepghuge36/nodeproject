const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = "WelcomePage";
  // res.send("DipakGhuge")
  res.render('index/welcome', {
    title: title
  });
})
router.get('/dashboard', (req, res) => {
  res.render("index/dashboard")
})
router.get('/about', (req, res) => {
  res.render("index/about")
})

module.exports = router