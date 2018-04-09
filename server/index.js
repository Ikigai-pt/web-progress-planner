/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const passport = require('passport');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
require('./api/oauth')(passport);
const configDB = require('./config/database.js');
mongoose.connect(configDB.url);
// TODO move the below configs to env variables
const secret = 'secret';

/* Returns middleware that only parses json. */
app.use(bodyParser.json());

/* Returns middleware that only parses urlencoded bodies. */
app.use(bodyParser.urlencoded({
  extended: false,
}));

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(methodOverride());

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser(secret));

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret,
  resave: true,
  saveUninitialized: false,
}));
// PassportJS is Express-compatible authentication middleware for Node.js.
// Intializes PassportJS for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize());

// The session authentication strategy uses the session to restore any login state across requests.
// If a login session has been established, `req.user` will be populated with the current user.
app.use(passport.session());

// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   next();
// });
// routes ======================================================================
require('./routes')(app, passport); // load our routes and pass in our app and fully configured passport

// If you need a backend, e.g. an API, add your custom backend-specific middleware here

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
