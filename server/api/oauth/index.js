
// load all the things we need
const FacebookStrategy = require('passport-facebook').Strategy;
// load the auth constiables
const configAuth = require('../../config/auth');
const User = require('../user/model/user');
// expose this function to our app using module.exports
const authHandler = (passport) => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: configAuth.facebookAuth.profileFields,
  }, (token, refreshToken, profile, done) => {
    process.nextTick(() => {
      const newUser = {
        profileId: profile.id,
        token,
        name: profile.name.givenName,
        email: profile.emails[0].value,
      };
      const query = { email: newUser.email };
      User.findOneAndUpdate(query, newUser, { upsert: true, new: true }, (err, savedUser) => {
        if (err) {
          return done(err);
        }
        return done(null, savedUser);
      });
      // const newUser = {
      //   id: profile.id,
      //   token,
      //   name: profile.displayName,
      // };
      // saveUser(newUser);
      // return done(null, newUser);
    });
  }));
};

module.exports = authHandler;

