
// load all the things we need
const FacebookStrategy = require('passport-facebook').Strategy;
const { getUserById } = require('../user');
// load the auth constiables
const configAuth = require('../../config/auth');
const { saveUser } = require('../user');
// expose this function to our app using module.exports
const authHandler = (passport) => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => {
    done(null, getUserById(user.id));
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
  }, (token, refreshToken, profile, done) => {
    process.nextTick(() => {
      console.log(JSON.stringify(profile));
      const newUser = {
        id: profile.id,
        token,
        name: profile.displayName,
      };
      saveUser(newUser);
      return done(null, newUser);
    });
  }));
};

module.exports = authHandler;
