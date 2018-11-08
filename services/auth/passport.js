const passport = require('passport');
const User = require('../../model/users');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, users.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
