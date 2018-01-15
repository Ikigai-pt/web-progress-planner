// const JSON = require('circular-json');
const userDB = [];

const saveUser = (user) => {
  userDB.push(user);
};

const getUser = (req, res) => {
  const userId = req.query.userId;
  res.send(userDB.filter((user) => user.id === userId));
};

const getUserById = (id) => userDB.filter((user) => user.id === id);

module.exports = { saveUser, getUser, getUserById };
