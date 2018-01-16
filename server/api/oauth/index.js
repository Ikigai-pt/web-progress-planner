
// load all the things we need
const FacebookStrategy = require('passport-facebook').Strategy;
const { getUserById } = require('../user');
// load the auth constiables
const configAuth = require('../../config/auth');
const { saveUser } = require('../user');
const User = require('../user/model/user');
// expose this function to our app using module.exports
const authHandler = (passport) => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((id, done) => {
    console.log("user not found in session")
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
      console.log(JSON.stringify(profile));
      const newUser = new User();
      newUser.facebook.id = profile.id;
      newUser.facebook.token = token;
      newUser.facebook.name = profile.name.givenName;
      newUser.facebook.email = profile.emails[0].value;

      // save our user to the database
      newUser.save((err) => {
        if (err) {
          return done(err);
        }
        return done(null, newUser);
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

