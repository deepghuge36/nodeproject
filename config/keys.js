const username = require('./appConfig').username;
const password = require('./appConfig').password;
const dbName = require('./appConfig').dbName;
const googleClientID = require('./appConfig').googleClientID;
const googleClientSecret = require('./appConfig').googleClientSecret;

module.exports = {
  googleClientID: googleClientID,
  googleClientSecret: googleClientSecret,
  mongoURI:`mongodb+srv://${username}:${password}@cluster0-pyixk.mongodb.net/${dbName}?retryWrites=true&w=majority`
}