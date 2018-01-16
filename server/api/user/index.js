// const JSON = require('circular-json');
const User = require('./model/user');

const getUser = (req, res) => {
  if (req.query.userId) {
    return User.findById(req.query.userId, (err, user) => {
      if (err) {
        return res.send(err);
      }
      const userProfile = {
        id: user.profileId,
        email: user.email,
        name: user.name,
      };
      return res.send(userProfile);
    });
  }
  return res.send({ error: 'user not found in the session' });
};

module.exports = { getUser };
