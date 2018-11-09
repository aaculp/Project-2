const bcrypt = require('bcryptjs');
const User = require('../../model/users');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
    console.log('this is req.body:', req.body)
  User.findByUserName(req.body.username)
    .then( user => {
      console.log('this is user: ', user)
      res.locals.user = user
       if (user) return next();
    })

}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}
