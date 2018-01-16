const { getUser } = require('../api/user');

// const isLoggedIn = (req, res, next) => {
//   console.log(JSON.stringify(req.user))
//   if (req.isAuthenticated()) {
//     console.log('is authenticated');
//     return next;
//   }
//   return res.redirect('/home');
// };

const routes = (app, passport) => {
  app.get('/api/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
  // TODO set header with token and isAuth flag set to True
  app.get('/api/auth/facebook/callback',
    passport.authenticate('facebook', {
      // successRedirect: '/home',
      failureRedirect: '/',
    }),
    (req, res) => {
      req.res.cookie('PROGRESS_PLANNER', req.user.id, { maxAge: 900000, httpOnly: false });
      res.redirect('/home');
    }
  );
  app.get('/api/user', getUser);
};

module.exports = routes;

