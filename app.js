const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

//passport configuration
require('./config/passport')(passport);

//load keys
const keys = require('./config/keys.js')
//mongoose connection
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));


app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
}))

//passport seesion
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send("DipakGhuge")
})

//load routes
const auth = require('./routes/auth')
app.use('/auth', auth)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Running on http://localhost:5000');
})