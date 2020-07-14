const express = require('express');
const { ensureAuthenticated } = require('../helper/authHelper');
const router = express.Router();
const mongoose = require('mongoose');
const Story = require('../models/Story');
const User = require('../models/User');

//stories index
router.get('/', (req, res) => {
  Story.find({ status: "public" })
    .populate('user')
    .then(stories => {
      res.render("stories/index", {
       stories: stories
     })
  })
})

//show single Story 
router.get('/show/:id', (req, res) => {
  Story.findOne({ _id: req.params.id })
    .populate('user')
    .then(story => {
      res.render("stories/show", {
        story: story
      })
    })
})

//add Stories
router.get('/add',ensureAuthenticated, (req, res) => {
  res.render("stories/add");
})

// edit stories 
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Story.findOne({ _id: req.params.id })
    .then(story => {
      res.render("stories/edit", {
        story: story
      })
    })
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

//edit post process
router.put('/:id', (req, res) => {
  Story.findOne({ _id: req.params.id })
    .then(story => {
      let allowComments;
      if (req.body.allowComments) {
      allowComments =true;
      } else {   
      allowComments = false;
      }
      
      //set new values
      story.title = req.body.title;
      story.body = req.body.body;
      story.status = req.body.status;
      story.allowComments = allowComments;

      story.save()
        .then(story => {
          res.redirect('/dashboard')
        })
    })
})

//delete story

router.delete('/:id', (req, res) => {
  Story.remove({ _id: req.params.id })
    .then(() => {
      res.redirect('/dashboard');
    })
})
module.exports = router