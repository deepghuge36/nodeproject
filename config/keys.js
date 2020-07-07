const username = require('./appConfig').username;
const password = require('./appConfig').password;
const dbName= require('./appConfig').dbName;

module.exports = {
  googleClientID:"791139257043-gv2js6btqsc1kcfcgcovsk5m7kq837ji.apps.googleusercontent.com",
  googleClientSecret:"2Q-ieUtIYkGguhFvnb_BZCrv",
  mongoURI:`mongodb+srv://${username}:${password}@cluster0-pyixk.mongodb.net/${dbName}?retryWrites=true&w=majority`
}