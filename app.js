const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
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

app.set('views', __dirname + '/views');
//use the handlebars
app.engine(
  'hbs',
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');


app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
}))

//passport seesion
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser());


//load routes
const auth = require('./routes/auth')
const index = require('./routes/index')
app.use('/auth', auth);
app.use('/', index)


app.listen(process.env.PORT || 5000, () => {
  console.log('Server Running on http://localhost:5000');
})