// app/models/user.js
// load the things we need
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
const userSchema = mongoose.Schema({
  profileId: String,
  token: String,
  email: String,
  name: String,
});

// // checking if password is valid using bcrypt
// userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.local.password);

// // this method hashes the password and sets the users password
// userSchema.methods.hashPassword = (password) => {
//   const user = this;
//   // hash the password
//   return bcrypt.hash(password, null, null, ((err, hash) => {
//     if (err) {
//       return err;
//     }
//     user.local.password = hash;
//     return user;
//   }));
// };

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
