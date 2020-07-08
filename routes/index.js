const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = "WelcomePage";
  // res.send("DipakGhuge")
  res.render('index/welcome', {
    title: title
  });
})
router.get('/home', (req, res) => {
  res.send("Home")
})

module.exports = router