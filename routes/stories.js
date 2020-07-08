const express = require('express');
const { ensureAuthenticated } = require('../helper/authHelper');
const router = express.Router();

//stories index
router.get('/', (req, res) => {
  res.render("stories/index")
})

//add Stories
router.get('/add',ensureAuthenticated, (req, res) => {
  res.render("stories/add");
})

//add stories to db
router.post('/', ensureAuthenticated, (req, res) => {
  res.send('send')
})
module.exports = router