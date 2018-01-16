const JSON = require('circular-json');
const User = require('./model/user');

const getUser = (req, res) => {
  console.log(JSON.stringify(req.query))
  if (req.query.userId) {
    User.findById(req.query.userId, (err, user) => {
      if (err) {
        return res.send(err);
      }
      const userProfile = {
        id: user.facebook.id,
        email: user.facebook.email,
        name: user.facebook.name,
      };
      return res.send(userProfile);
    });
  } else {
    return res.send({error:'user not found in the session'});
  }
};

module.exports = { getUser };
