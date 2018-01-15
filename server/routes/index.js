const { getUser } = require('../api/user');

// const isLoggedIn = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     console.log('is authenticated');
//     return next;
//   }
//   return res.redirect('/');
// };

const routes = (app, passport) => {
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
  // TODO set header with token and isAuth flag set to True
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/home',
      failureRedirect: '/',
    })
  );
  app.get('/api/user', getUser);
};

module.exports = routes;

