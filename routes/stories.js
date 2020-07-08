const express = require('express');
const { ensureAuthenticated } = require('../helper/authHelper');
const router = express.Router();
const mongoose = require('mongoose');
const Story = require('../models/Story');
const User = require('../models/User');

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
  let allowComments;

  if (req.body.allowComments) {
    allowComments =true;
  } else {
    allowComments = false;
  }

  const newStory = {
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments: allowComments,
    user: req.user.id,
  }

  new Story(newStory)
    .save()
    .then((story) => {
      res.redirect(`/stories/show/${story.id}`)
    })
})
module.exports = router