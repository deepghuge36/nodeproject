const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
//passport configuration
require('./config/passport')(passport);
//load routes
const auth = require('./routes/auth')

const app = express();


app.get('/', (req, res) => {
  res.send("DipakGhuge")
})

app.use('/auth',auth)
const port = process.env.port || 5000;
app.listen(port,()=>{
  console.log(`App Running on port ${port}`);
})